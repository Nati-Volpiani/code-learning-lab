--
-- PostgreSQL database dump
--

\restrict WVuVePMCeKCgOLMxRbmfwkIpb45Kd7kHaUv4OGdKFI5cOnk0cwQBNe7cJYiKrQk

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
-- Name: nf1; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA nf1;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: customer_phones; Type: TABLE; Schema: nf1; Owner: -
--

CREATE TABLE nf1.customer_phones (
    customer_id integer NOT NULL,
    phone text NOT NULL
);


--
-- Name: customers; Type: TABLE; Schema: nf1; Owner: -
--

CREATE TABLE nf1.customers (
    customer_id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: customers_before; Type: TABLE; Schema: nf1; Owner: -
--

CREATE TABLE nf1.customers_before (
    customer_id integer NOT NULL,
    name text NOT NULL,
    phones text NOT NULL
);


--
-- Data for Name: customer_phones; Type: TABLE DATA; Schema: nf1; Owner: -
--

COPY nf1.customer_phones (customer_id, phone) FROM stdin;
1	3512222222
2	3513333333
1	3514444444
3	3515555555
\.


--
-- Data for Name: customers; Type: TABLE DATA; Schema: nf1; Owner: -
--

COPY nf1.customers (customer_id, name) FROM stdin;
1	Ana
2	Bruno
3	Carla
\.


--
-- Data for Name: customers_before; Type: TABLE DATA; Schema: nf1; Owner: -
--

COPY nf1.customers_before (customer_id, name, phones) FROM stdin;
1	Ana	3511111111,3512222222
2	Bruno	3513333333
\.


--
-- Name: customer_phones customer_phones_pkey; Type: CONSTRAINT; Schema: nf1; Owner: -
--

ALTER TABLE ONLY nf1.customer_phones
    ADD CONSTRAINT customer_phones_pkey PRIMARY KEY (customer_id, phone);


--
-- Name: customers_before customers_before_pkey; Type: CONSTRAINT; Schema: nf1; Owner: -
--

ALTER TABLE ONLY nf1.customers_before
    ADD CONSTRAINT customers_before_pkey PRIMARY KEY (customer_id);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: nf1; Owner: -
--

ALTER TABLE ONLY nf1.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customer_id);


--
-- Name: customer_phones customer_phones_customer_id_fkey; Type: FK CONSTRAINT; Schema: nf1; Owner: -
--

ALTER TABLE ONLY nf1.customer_phones
    ADD CONSTRAINT customer_phones_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES nf1.customers(customer_id);


--
-- PostgreSQL database dump complete
--

\unrestrict WVuVePMCeKCgOLMxRbmfwkIpb45Kd7kHaUv4OGdKFI5cOnk0cwQBNe7cJYiKrQk

