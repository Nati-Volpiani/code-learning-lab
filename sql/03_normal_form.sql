--
-- PostgreSQL database dump
--

\restrict 3SbxRvJ9kfZUUTkMR0bAHiwariHl7kZObUSHdjdZbia6bqaeqgWXjSbvB3idiHZ

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
-- Name: nf3; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA nf3;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: departments; Type: TABLE; Schema: nf3; Owner: -
--

CREATE TABLE nf3.departments (
    department_id integer NOT NULL,
    department_name text NOT NULL,
    department_phone text NOT NULL
);


--
-- Name: employees; Type: TABLE; Schema: nf3; Owner: -
--

CREATE TABLE nf3.employees (
    employee_id integer NOT NULL,
    employee_name text NOT NULL,
    department_id integer NOT NULL
);


--
-- Name: employees_before; Type: TABLE; Schema: nf3; Owner: -
--

CREATE TABLE nf3.employees_before (
    employee_id integer NOT NULL,
    employee_name text NOT NULL,
    department_id integer NOT NULL,
    department_name text NOT NULL,
    department_phone text NOT NULL
);


--
-- Data for Name: departments; Type: TABLE DATA; Schema: nf3; Owner: -
--

COPY nf3.departments (department_id, department_name, department_phone) FROM stdin;
20	Support	3515000000
10	Sales	3514999999
30	Purchasing	3516000000
\.


--
-- Data for Name: employees; Type: TABLE DATA; Schema: nf3; Owner: -
--

COPY nf3.employees (employee_id, employee_name, department_id) FROM stdin;
1	Ana	10
3	Carla	20
2	Bruno	30
\.


--
-- Data for Name: employees_before; Type: TABLE DATA; Schema: nf3; Owner: -
--

COPY nf3.employees_before (employee_id, employee_name, department_id, department_name, department_phone) FROM stdin;
1	Ana	10	Sales	3514000000
2	Bruno	10	Sales	3514000000
3	Carla	20	Support	3515000000
\.


--
-- Name: departments departments_pkey; Type: CONSTRAINT; Schema: nf3; Owner: -
--

ALTER TABLE ONLY nf3.departments
    ADD CONSTRAINT departments_pkey PRIMARY KEY (department_id);


--
-- Name: employees_before employees_before_pkey; Type: CONSTRAINT; Schema: nf3; Owner: -
--

ALTER TABLE ONLY nf3.employees_before
    ADD CONSTRAINT employees_before_pkey PRIMARY KEY (employee_id);


--
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: nf3; Owner: -
--

ALTER TABLE ONLY nf3.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (employee_id);


--
-- Name: employees employees_department_id_fkey; Type: FK CONSTRAINT; Schema: nf3; Owner: -
--

ALTER TABLE ONLY nf3.employees
    ADD CONSTRAINT employees_department_id_fkey FOREIGN KEY (department_id) REFERENCES nf3.departments(department_id);


--
-- PostgreSQL database dump complete
--

\unrestrict 3SbxRvJ9kfZUUTkMR0bAHiwariHl7kZObUSHdjdZbia6bqaeqgWXjSbvB3idiHZ

