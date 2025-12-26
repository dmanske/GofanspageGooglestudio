export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      admin_customers: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          monthly_value: number | null
          name: string
          plan: string
          status: string
          stripe_customer_id: string | null
          updated_at: string
          whatsapp: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          monthly_value?: number | null
          name: string
          plan?: string
          status?: string
          stripe_customer_id?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          monthly_value?: number | null
          name?: string
          plan?: string
          status?: string
          stripe_customer_id?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      clips: {
        Row: {
          artist: string | null
          created_at: string | null
          cultural_analysis: Json | null
          delay: number | null
          description: string | null
          duration: string | null
          id: string
          is_featured: boolean | null
          release_year: number | null
          status: string | null
          subtitled_by: string | null
          subtitles_json: Json | null
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          video_url: string | null
          views: number | null
        }
        Insert: {
          artist?: string | null
          created_at?: string | null
          cultural_analysis?: Json | null
          delay?: number | null
          description?: string | null
          duration?: string | null
          id?: string
          is_featured?: boolean | null
          release_year?: number | null
          status?: string | null
          subtitled_by?: string | null
          subtitles_json?: Json | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          video_url?: string | null
          views?: number | null
        }
        Update: {
          artist?: string | null
          created_at?: string | null
          cultural_analysis?: Json | null
          delay?: number | null
          description?: string | null
          duration?: string | null
          id?: string
          is_featured?: boolean | null
          release_year?: number | null
          status?: string | null
          subtitled_by?: string | null
          subtitles_json?: Json | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          video_url?: string | null
          views?: number | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          clip_id: string | null
          content: string | null
          created_at: string | null
          id: string
          parent_id: string | null
          rating: number | null
          status: string | null
          user_email: string | null
          user_id: string | null
          user_name: string | null
        }
        Insert: {
          clip_id?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          parent_id?: string | null
          rating?: number | null
          status?: string | null
          user_email?: string | null
          user_id?: string | null
          user_name?: string | null
        }
        Update: {
          clip_id?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          parent_id?: string | null
          rating?: number | null
          status?: string | null
          user_email?: string | null
          user_id?: string | null
          user_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_clip_id_fkey"
            columns: ["clip_id"]
            isOneToOne: false
            referencedRelation: "clips"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_projects: {
        Row: {
          created_at: string
          custom_domain: string | null
          customer_id: string
          environment: string | null
          id: string
          notes: string | null
          supabase_project_id: string | null
          supabase_url: string | null
          updated_at: string
          vercel_project_id: string | null
          vercel_url: string | null
        }
        Insert: {
          created_at?: string
          custom_domain?: string | null
          customer_id: string
          environment?: string | null
          id?: string
          notes?: string | null
          supabase_project_id?: string | null
          supabase_url?: string | null
          updated_at?: string
          vercel_project_id?: string | null
          vercel_url?: string | null
        }
        Update: {
          created_at?: string
          custom_domain?: string | null
          customer_id?: string
          environment?: string | null
          id?: string
          notes?: string | null
          supabase_project_id?: string | null
          supabase_url?: string | null
          updated_at?: string
          vercel_project_id?: string | null
          vercel_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_projects_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "admin_customers"
            referencedColumns: ["id"]
          },
        ]
      }
      movies_hds: {
        Row: {
          created_at: string | null
          id: string
          is_external: boolean | null
          name: string
          network_address: string | null
          pc_id: string | null
          updated_at: string | null
          volume_name: string | null
          volume_path: string | null
          volume_uuid: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_external?: boolean | null
          name: string
          network_address?: string | null
          pc_id?: string | null
          updated_at?: string | null
          volume_name?: string | null
          volume_path?: string | null
          volume_uuid?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_external?: boolean | null
          name?: string
          network_address?: string | null
          pc_id?: string | null
          updated_at?: string | null
          volume_name?: string | null
          volume_path?: string | null
          volume_uuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "movies_hds_pc_id_fkey"
            columns: ["pc_id"]
            isOneToOne: false
            referencedRelation: "movies_pcs"
            referencedColumns: ["id"]
          },
        ]
      }
      movies_library: {
        Row: {
          backdrop_local: boolean | null
          backdrop_url: string | null
          collection_id: number | null
          collection_name: string | null
          created_at: string | null
          director: string | null
          duration: number | null
          file_name: string | null
          file_path: string
          genres: string[] | null
          hd_id: string
          hidden: boolean | null
          id: string
          imdb_id: string | null
          movie_cast: string[] | null
          original_title: string | null
          poster_local: boolean | null
          poster_url: string | null
          rating: number | null
          resolution: string | null
          synced_at: string | null
          synopsis: string | null
          title: string
          tmdb_id: number | null
          updated_at: string | null
          watched: boolean | null
          watched_at: string | null
          year: number | null
        }
        Insert: {
          backdrop_local?: boolean | null
          backdrop_url?: string | null
          collection_id?: number | null
          collection_name?: string | null
          created_at?: string | null
          director?: string | null
          duration?: number | null
          file_name?: string | null
          file_path: string
          genres?: string[] | null
          hd_id: string
          hidden?: boolean | null
          id?: string
          imdb_id?: string | null
          movie_cast?: string[] | null
          original_title?: string | null
          poster_local?: boolean | null
          poster_url?: string | null
          rating?: number | null
          resolution?: string | null
          synced_at?: string | null
          synopsis?: string | null
          title: string
          tmdb_id?: number | null
          updated_at?: string | null
          watched?: boolean | null
          watched_at?: string | null
          year?: number | null
        }
        Update: {
          backdrop_local?: boolean | null
          backdrop_url?: string | null
          collection_id?: number | null
          collection_name?: string | null
          created_at?: string | null
          director?: string | null
          duration?: number | null
          file_name?: string | null
          file_path?: string
          genres?: string[] | null
          hd_id?: string
          hidden?: boolean | null
          id?: string
          imdb_id?: string | null
          movie_cast?: string[] | null
          original_title?: string | null
          poster_local?: boolean | null
          poster_url?: string | null
          rating?: number | null
          resolution?: string | null
          synced_at?: string | null
          synopsis?: string | null
          title?: string
          tmdb_id?: number | null
          updated_at?: string | null
          watched?: boolean | null
          watched_at?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "movies_library_hd_id_fkey"
            columns: ["hd_id"]
            isOneToOne: false
            referencedRelation: "movies_by_hd"
            referencedColumns: ["hd_id"]
          },
          {
            foreignKeyName: "movies_library_hd_id_fkey"
            columns: ["hd_id"]
            isOneToOne: false
            referencedRelation: "movies_hds"
            referencedColumns: ["id"]
          },
        ]
      }
      movies_pcs: {
        Row: {
          created_at: string | null
          id: string
          machine_id: string | null
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          machine_id?: string | null
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          machine_id?: string | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      music_clips_library: {
        Row: {
          artist: string | null
          bitrate: number | null
          codec: string | null
          created_at: string | null
          duration: number | null
          file_name: string
          file_path: string
          file_size: number | null
          format: string | null
          fps: number | null
          has_subtitles: boolean | null
          hd_id: string
          height: number | null
          id: string
          subtitle_languages: string[] | null
          synced_at: string | null
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          width: number | null
        }
        Insert: {
          artist?: string | null
          bitrate?: number | null
          codec?: string | null
          created_at?: string | null
          duration?: number | null
          file_name: string
          file_path: string
          file_size?: number | null
          format?: string | null
          fps?: number | null
          has_subtitles?: boolean | null
          hd_id: string
          height?: number | null
          id?: string
          subtitle_languages?: string[] | null
          synced_at?: string | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          width?: number | null
        }
        Update: {
          artist?: string | null
          bitrate?: number | null
          codec?: string | null
          created_at?: string | null
          duration?: number | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          format?: string | null
          fps?: number | null
          has_subtitles?: boolean | null
          hd_id?: string
          height?: number | null
          id?: string
          subtitle_languages?: string[] | null
          synced_at?: string | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "music_clips_library_hd_id_fkey"
            columns: ["hd_id"]
            isOneToOne: false
            referencedRelation: "music_hds"
            referencedColumns: ["id"]
          },
        ]
      }
      music_hds: {
        Row: {
          created_at: string | null
          id: string
          is_external: boolean | null
          name: string
          network_address: string | null
          pc_id: string | null
          updated_at: string | null
          volume_name: string | null
          volume_path: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_external?: boolean | null
          name: string
          network_address?: string | null
          pc_id?: string | null
          updated_at?: string | null
          volume_name?: string | null
          volume_path?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_external?: boolean | null
          name?: string
          network_address?: string | null
          pc_id?: string | null
          updated_at?: string | null
          volume_name?: string | null
          volume_path?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "music_hds_pc_id_fkey"
            columns: ["pc_id"]
            isOneToOne: false
            referencedRelation: "music_pcs"
            referencedColumns: ["id"]
          },
        ]
      }
      music_pcs: {
        Row: {
          created_at: string | null
          id: string
          machine_id: string | null
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          machine_id?: string | null
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          machine_id?: string | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          role: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          role?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
        }
        Relationships: []
      }
      series_episodes: {
        Row: {
          created_at: string | null
          duration: number | null
          episode_cast: string[] | null
          file_name: string | null
          file_path: string
          has_embedded_subtitles: boolean | null
          has_srt_subtitle: boolean | null
          id: string
          imdb_rating: number | null
          is_available: boolean | null
          is_part_of_multi_episode_file: boolean | null
          number: number
          release_date: string | null
          season_id: string | null
          synopsis: string | null
          thumbnail_local: boolean | null
          thumbnail_url: string | null
          title: string | null
          title_pt: string | null
          updated_at: string | null
          watched: boolean | null
          watched_at: string | null
        }
        Insert: {
          created_at?: string | null
          duration?: number | null
          episode_cast?: string[] | null
          file_name?: string | null
          file_path: string
          has_embedded_subtitles?: boolean | null
          has_srt_subtitle?: boolean | null
          id?: string
          imdb_rating?: number | null
          is_available?: boolean | null
          is_part_of_multi_episode_file?: boolean | null
          number: number
          release_date?: string | null
          season_id?: string | null
          synopsis?: string | null
          thumbnail_local?: boolean | null
          thumbnail_url?: string | null
          title?: string | null
          title_pt?: string | null
          updated_at?: string | null
          watched?: boolean | null
          watched_at?: string | null
        }
        Update: {
          created_at?: string | null
          duration?: number | null
          episode_cast?: string[] | null
          file_name?: string | null
          file_path?: string
          has_embedded_subtitles?: boolean | null
          has_srt_subtitle?: boolean | null
          id?: string
          imdb_rating?: number | null
          is_available?: boolean | null
          is_part_of_multi_episode_file?: boolean | null
          number?: number
          release_date?: string | null
          season_id?: string | null
          synopsis?: string | null
          thumbnail_local?: boolean | null
          thumbnail_url?: string | null
          title?: string | null
          title_pt?: string | null
          updated_at?: string | null
          watched?: boolean | null
          watched_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "series_episodes_season_id_fkey"
            columns: ["season_id"]
            isOneToOne: false
            referencedRelation: "series_seasons"
            referencedColumns: ["id"]
          },
        ]
      }
      series_hds: {
        Row: {
          created_at: string | null
          id: string
          is_external: boolean | null
          name: string
          network_address: string | null
          pc_id: string | null
          updated_at: string | null
          volume_name: string | null
          volume_path: string | null
          volume_uuid: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_external?: boolean | null
          name: string
          network_address?: string | null
          pc_id?: string | null
          updated_at?: string | null
          volume_name?: string | null
          volume_path?: string | null
          volume_uuid?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_external?: boolean | null
          name?: string
          network_address?: string | null
          pc_id?: string | null
          updated_at?: string | null
          volume_name?: string | null
          volume_path?: string | null
          volume_uuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "series_hds_pc_id_fkey"
            columns: ["pc_id"]
            isOneToOne: false
            referencedRelation: "series_pcs"
            referencedColumns: ["id"]
          },
        ]
      }
      series_library: {
        Row: {
          backdrop_local: boolean | null
          backdrop_url: string | null
          base_path: string
          created_at: string | null
          creator: string | null
          genres: string[] | null
          hd_id: string | null
          hidden: boolean | null
          id: string
          imdb_id: string | null
          last_watched_at: string | null
          original_title: string | null
          poster_local: boolean | null
          poster_url: string | null
          progress_percentage: number | null
          rating: number | null
          series_cast: string[] | null
          status: string | null
          synced_at: string | null
          synopsis: string | null
          title: string
          tmdb_id: number | null
          total_episodes: number | null
          updated_at: string | null
          watched_episodes: number | null
          year: number | null
        }
        Insert: {
          backdrop_local?: boolean | null
          backdrop_url?: string | null
          base_path: string
          created_at?: string | null
          creator?: string | null
          genres?: string[] | null
          hd_id?: string | null
          hidden?: boolean | null
          id?: string
          imdb_id?: string | null
          last_watched_at?: string | null
          original_title?: string | null
          poster_local?: boolean | null
          poster_url?: string | null
          progress_percentage?: number | null
          rating?: number | null
          series_cast?: string[] | null
          status?: string | null
          synced_at?: string | null
          synopsis?: string | null
          title: string
          tmdb_id?: number | null
          total_episodes?: number | null
          updated_at?: string | null
          watched_episodes?: number | null
          year?: number | null
        }
        Update: {
          backdrop_local?: boolean | null
          backdrop_url?: string | null
          base_path?: string
          created_at?: string | null
          creator?: string | null
          genres?: string[] | null
          hd_id?: string | null
          hidden?: boolean | null
          id?: string
          imdb_id?: string | null
          last_watched_at?: string | null
          original_title?: string | null
          poster_local?: boolean | null
          poster_url?: string | null
          progress_percentage?: number | null
          rating?: number | null
          series_cast?: string[] | null
          status?: string | null
          synced_at?: string | null
          synopsis?: string | null
          title?: string
          tmdb_id?: number | null
          total_episodes?: number | null
          updated_at?: string | null
          watched_episodes?: number | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "series_library_hd_id_fkey"
            columns: ["hd_id"]
            isOneToOne: false
            referencedRelation: "series_hds"
            referencedColumns: ["id"]
          },
        ]
      }
      series_pcs: {
        Row: {
          created_at: string | null
          id: string
          machine_id: string | null
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          machine_id?: string | null
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          machine_id?: string | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      series_seasons: {
        Row: {
          available_episodes: number | null
          created_at: string | null
          id: string
          number: number
          poster_local: boolean | null
          poster_url: string | null
          series_id: string | null
          total_episodes: number | null
          updated_at: string | null
        }
        Insert: {
          available_episodes?: number | null
          created_at?: string | null
          id?: string
          number: number
          poster_local?: boolean | null
          poster_url?: string | null
          series_id?: string | null
          total_episodes?: number | null
          updated_at?: string | null
        }
        Update: {
          available_episodes?: number | null
          created_at?: string | null
          id?: string
          number?: number
          poster_local?: boolean | null
          poster_url?: string | null
          series_id?: string | null
          total_episodes?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "series_seasons_series_id_fkey"
            columns: ["series_id"]
            isOneToOne: false
            referencedRelation: "series_library"
            referencedColumns: ["id"]
          },
        ]
      }
      subtitle_submissions: {
        Row: {
          created_at: string | null
          id: string
          message: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          srt_content: string
          status: string | null
          submitter_email: string
          submitter_name: string
          youtube_url: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          srt_content: string
          status?: string | null
          submitter_email: string
          submitter_name: string
          youtube_url: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          srt_content?: string
          status?: string | null
          submitter_email?: string
          submitter_name?: string
          youtube_url?: string
        }
        Relationships: []
      }
      tmdb_movie_wishlist: {
        Row: {
          added_at: string | null
          genres: Json | null
          id: string
          original_title: string | null
          overview: string | null
          poster_path: string | null
          release_date: string | null
          runtime: number | null
          score: number | null
          status: string | null
          title: string
          tmdb_id: number
          updated_at: string | null
          user_id: string | null
          vote_average: number | null
        }
        Insert: {
          added_at?: string | null
          genres?: Json | null
          id?: string
          original_title?: string | null
          overview?: string | null
          poster_path?: string | null
          release_date?: string | null
          runtime?: number | null
          score?: number | null
          status?: string | null
          title: string
          tmdb_id: number
          updated_at?: string | null
          user_id?: string | null
          vote_average?: number | null
        }
        Update: {
          added_at?: string | null
          genres?: Json | null
          id?: string
          original_title?: string | null
          overview?: string | null
          poster_path?: string | null
          release_date?: string | null
          runtime?: number | null
          score?: number | null
          status?: string | null
          title?: string
          tmdb_id?: number
          updated_at?: string | null
          user_id?: string | null
          vote_average?: number | null
        }
        Relationships: []
      }
      tmdb_series_wishlist: {
        Row: {
          added_at: string | null
          first_air_date: string | null
          genres: Json | null
          id: string
          name: string | null
          number_of_episodes: number | null
          number_of_seasons: number | null
          original_name: string | null
          overview: string | null
          poster_path: string | null
          score: number | null
          status: string | null
          title: string
          tmdb_id: number
          updated_at: string | null
          user_id: string | null
          vote_average: number | null
        }
        Insert: {
          added_at?: string | null
          first_air_date?: string | null
          genres?: Json | null
          id?: string
          name?: string | null
          number_of_episodes?: number | null
          number_of_seasons?: number | null
          original_name?: string | null
          overview?: string | null
          poster_path?: string | null
          score?: number | null
          status?: string | null
          title: string
          tmdb_id: number
          updated_at?: string | null
          user_id?: string | null
          vote_average?: number | null
        }
        Update: {
          added_at?: string | null
          first_air_date?: string | null
          genres?: Json | null
          id?: string
          name?: string | null
          number_of_episodes?: number | null
          number_of_seasons?: number | null
          original_name?: string | null
          overview?: string | null
          poster_path?: string | null
          score?: number | null
          status?: string | null
          title?: string
          tmdb_id?: number
          updated_at?: string | null
          user_id?: string | null
          vote_average?: number | null
        }
        Relationships: []
      }
      translation_requests: {
        Row: {
          assigned_to: string | null
          completed_at: string | null
          created_at: string | null
          id: string
          language: string | null
          message: string | null
          priority: number | null
          requester_email: string | null
          requester_name: string | null
          status: string | null
          youtube_url: string
        }
        Insert: {
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          language?: string | null
          message?: string | null
          priority?: number | null
          requester_email?: string | null
          requester_name?: string | null
          status?: string | null
          youtube_url: string
        }
        Update: {
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          language?: string | null
          message?: string | null
          priority?: number | null
          requester_email?: string | null
          requester_name?: string | null
          status?: string | null
          youtube_url?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      movies_by_hd: {
        Row: {
          hd_id: string | null
          hd_name: string | null
          is_external: boolean | null
          movie_count: number | null
          pc_name: string | null
          watched_count: number | null
        }
        Relationships: []
      }
      movies_library_stats: {
        Row: {
          average_rating: number | null
          hidden_movies: number | null
          total_collections: number | null
          total_duration_minutes: number | null
          total_movies: number | null
          watched_movies: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      show_limit: { Args: never; Returns: number }
      show_trgm: { Args: { "": string }; Returns: string[] }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
