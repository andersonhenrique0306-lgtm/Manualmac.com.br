create extension if not exists pgcrypto;
create type account_status as enum ('active','suspended','closed');
create type product_status as enum ('draft','published','archived');
create type order_status as enum ('pending','paid','cancelled','refunded');

create table profiles (
  id uuid primary key references auth.users(id) on delete restrict,
  full_name text not null default '',
  email text not null,
  status account_status not null default 'active',
  preferred_locale text not null default 'pt-BR' check (preferred_locale in ('pt-BR','en','es')),
  created_at timestamptz not null default now()
);

create table categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name_pt text not null,
  name_en text not null,
  name_es text not null,
  active boolean not null default true
);

create table manufacturers (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text unique not null
);

create table products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null default '',
  manufacturer_id uuid references manufacturers(id),
  category_id uuid references categories(id),
  equipment_model text not null,
  year_from integer,
  year_to integer,
  document_type text not null,
  language_code text not null check (language_code in ('pt','en','es')),
  pages integer,
  price_brl numeric(12,2) not null check (price_brl >= 0),
  status product_status not null default 'draft',
  rights_confirmed boolean not null default false,
  rights_reference text,
  created_at timestamptz not null default now()
);

create table product_files (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id),
  storage_path text unique not null,
  original_filename text not null,
  mime_type text not null check (mime_type = 'application/pdf'),
  file_size_bytes bigint,
  active boolean not null default true
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references profiles(id),
  status order_status not null default 'pending',
  currency char(3) not null default 'BRL' check (currency = 'BRL'),
  total_brl numeric(12,2) not null check (total_brl >= 0),
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id),
  product_id uuid not null references products(id),
  title_snapshot text not null,
  unit_price_brl numeric(12,2) not null check (unit_price_brl >= 0),
  unique(order_id, product_id)
);

create table payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id),
  provider text not null default 'mercadopago',
  provider_payment_id text unique,
  method text not null check (method in ('pix','card')),
  status text not null default 'pending',
  amount_brl numeric(12,2) not null,
  confirmed_at timestamptz
);

create table entitlements (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references profiles(id),
  product_id uuid not null references products(id),
  order_item_id uuid not null unique references order_items(id),
  active boolean not null default true,
  granted_at timestamptz not null default now(),
  unique(customer_id, product_id)
);

create table download_events (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references profiles(id),
  product_file_id uuid not null references product_files(id),
  created_at timestamptz not null default now()
);

-- Para produção: habilitar RLS em todas as tabelas e criar políticas restritivas.
-- PDFs devem ficar em bucket privado. Nunca conceder acesso público ao bucket.
-- Escritas de pedidos/pagamentos/direitos e URLs assinadas apenas no servidor.
