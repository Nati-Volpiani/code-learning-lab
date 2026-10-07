--
-- PostgreSQL database dump
--

\restrict 7i3yAyLkw9d3mrfFnX6EjdZ5ptAYBcKzx0SyS87yBDyMOBVfVrShWM5SOuFtMrP

-- Dumped from database version 17.11 (Debian 17.11-1.pgdg13+2)
-- Dumped by pg_dump version 17.11 (Debian 17.11-1.pgdg13+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: nf2; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA nf2;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: order_items; Type: TABLE; Schema: nf2; Owner: -
--

CREATE TABLE nf2.order_items (
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT order_items_quantity_check CHECK ((quantity > 0))
);


--
-- Name: order_items_before; Type: TABLE; Schema: nf2; Owner: -
--

CREATE TABLE nf2.order_items_before (
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    product_name text NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT order_items_before_quantity_check CHECK ((quantity > 0))
);


--
-- Name: orders; Type: TABLE; Schema: nf2; Owner: -
--

CREATE TABLE nf2.orders (
    order_id integer NOT NULL
);


--
-- Name: products; Type: TABLE; Schema: nf2; Owner: -
--

CREATE TABLE nf2.products (
    product_id integer NOT NULL,
    product_name text NOT NULL
);


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: nf2; Owner: -
--

COPY nf2.order_items (order_id, product_id, quantity) FROM stdin;
100	10	2
100	20	1
101	10	1
102	30	3
\.


--
-- Data for Name: order_items_before; Type: TABLE DATA; Schema: nf2; Owner: -
--

COPY nf2.order_items_before (order_id, product_id, product_name, quantity) FROM stdin;
100	10	Teclado	2
100	20	Mouse	1
101	10	Teclado	1
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: nf2; Owner: -
--

COPY nf2.orders (order_id) FROM stdin;
101
100
102
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: nf2; Owner: -
--

COPY nf2.products (product_id, product_name) FROM stdin;
20	Mouse
10	Teclado USB
30	Monitor
\.


--
-- Name: order_items_before order_items_before_pkey; Type: CONSTRAINT; Schema: nf2; Owner: -
--

ALTER TABLE ONLY nf2.order_items_before
    ADD CONSTRAINT order_items_before_pkey PRIMARY KEY (order_id, product_id);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: nf2; Owner: -
--

ALTER TABLE ONLY nf2.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (order_id, product_id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: nf2; Owner: -
--

ALTER TABLE ONLY nf2.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: nf2; Owner: -
--

ALTER TABLE ONLY nf2.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: nf2; Owner: -
--

ALTER TABLE ONLY nf2.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES nf2.orders(order_id);


--
-- Name: order_items order_items_product_id_fkey; Type: FK CONSTRAINT; Schema: nf2; Owner: -
--

ALTER TABLE ONLY nf2.order_items
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES nf2.products(product_id);


--
-- PostgreSQL database dump complete
--

\unrestrict 7i3yAyLkw9d3mrfFnX6EjdZ5ptAYBcKzx0SyS87yBDyMOBVfVrShWM5SOuFtMrP

