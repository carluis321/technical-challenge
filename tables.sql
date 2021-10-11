CREATE TABLE public.pairs (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	created_at timestamp NOT NULL DEFAULT now(),
	CONSTRAINT pairs_name_un UNIQUE (name),
	CONSTRAINT pairs_pk PRIMARY KEY (id)
);

CREATE TABLE public.pair_historial_info (
	id serial4 NOT NULL,
	pair_id int8 NOT NULL,
	mins int4 NOT NULL,
	price float8 NOT NULL,
	created_at timestamp NOT NULL DEFAULT now(),
	CONSTRAINT pair_historial_info_pk PRIMARY KEY (id)
);