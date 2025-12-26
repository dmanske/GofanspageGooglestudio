-- Tabela de clientes compradores do GoFans (empresas de caravana)
CREATE TABLE public.admin_customers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  whatsapp TEXT,
  plan TEXT NOT NULL DEFAULT 'saas',
  status TEXT NOT NULL DEFAULT 'active',
  monthly_value DECIMAL(10,2) DEFAULT 0,
  stripe_customer_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de projetos de cada cliente (Supabase/Vercel)
CREATE TABLE public.customer_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID NOT NULL REFERENCES public.admin_customers(id) ON DELETE CASCADE,
  supabase_project_id TEXT,
  supabase_url TEXT,
  vercel_project_id TEXT,
  vercel_url TEXT,
  custom_domain TEXT,
  environment TEXT DEFAULT 'production',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_projects ENABLE ROW LEVEL SECURITY;

-- Policies - only admins can access
CREATE POLICY "Only admins can view customers"
ON public.admin_customers
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can insert customers"
ON public.admin_customers
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update customers"
ON public.admin_customers
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete customers"
ON public.admin_customers
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can view projects"
ON public.customer_projects
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can insert projects"
ON public.customer_projects
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update projects"
ON public.customer_projects
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete projects"
ON public.customer_projects
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Trigger for updated_at
CREATE TRIGGER update_admin_customers_updated_at
BEFORE UPDATE ON public.admin_customers
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_admin_customers_updated_at ON public.admin_customers;

CREATE TRIGGER update_admin_customers_updated_at
BEFORE UPDATE ON public.admin_customers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_customer_projects_updated_at
BEFORE UPDATE ON public.customer_projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();