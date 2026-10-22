--
-- PostgreSQL database dump
--

\restrict Miov8SfgyKfj9n13OSdm53CfSJHkVSEXIcBE5N4e5PjQbHrigBkjU5q7KEl5jb6

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
-- Name: nf4; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA nf4;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: professional_languages; Type: TABLE; Schema: nf4; Owner: -
--

CREATE TABLE nf4.professional_languages (
    professional_id integer NOT NULL,
    language text NOT NULL
);


--
-- Name: professional_specialties; Type: TABLE; Schema: nf4; Owner: -
--

CREATE TABLE nf4.professional_specialties (
    professional_id integer NOT NULL,
    specialty text NOT NULL
);


--
-- Name: professionals; Type: TABLE; Schema: nf4; Owner: -
--

CREATE TABLE nf4.professionals (
    professional_id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: profile_before; Type: TABLE; Schema: nf4; Owner: -
--

CREATE TABLE nf4.profile_before (
    professional_id integer NOT NULL,
    language text NOT NULL,
    specialty text NOT NULL
);


--
-- Data for Name: professional_languages; Type: TABLE DATA; Schema: nf4; Owner: -
--

COPY nf4.professional_languages (professional_id, language) FROM stdin;
1	Inglés
1	Español
1	Portugués
\.


--
-- Data for Name: professional_specialties; Type: TABLE DATA; Schema: nf4; Owner: -
--

COPY nf4.professional_specialties (professional_id, specialty) FROM stdin;
1	Diseño
1	Fotografía
1	Ilustración
\.


--
-- Data for Name: professionals; Type: TABLE DATA; Schema: nf4; Owner: -
--

COPY nf4.professionals (professional_id, name) FROM stdin;
1	Ana
\.


--
-- Data for Name: profile_before; Type: TABLE DATA; Schema: nf4; Owner: -
--

COPY nf4.profile_before (professional_id, language, specialty) FROM stdin;
1	Español	Diseño
1	Español	Fotografía
1	Inglés	Diseño
1	Inglés	Fotografía
\.


--
-- Name: professional_languages professional_languages_pkey; Type: CONSTRAINT; Schema: nf4; Owner: -
--

ALTER TABLE ONLY nf4.professional_languages
    ADD CONSTRAINT professional_languages_pkey PRIMARY KEY (professional_id, language);


--
-- Name: professional_specialties professional_specialties_pkey; Type: CONSTRAINT; Schema: nf4; Owner: -
--

ALTER TABLE ONLY nf4.professional_specialties
    ADD CONSTRAINT professional_specialties_pkey PRIMARY KEY (professional_id, specialty);


--
-- Name: professionals professionals_pkey; Type: CONSTRAINT; Schema: nf4; Owner: -
--

ALTER TABLE ONLY nf4.professionals
    ADD CONSTRAINT professionals_pkey PRIMARY KEY (professional_id);


--
-- Name: profile_before profile_before_pkey; Type: CONSTRAINT; Schema: nf4; Owner: -
--

ALTER TABLE ONLY nf4.profile_before
    ADD CONSTRAINT profile_before_pkey PRIMARY KEY (professional_id, language, specialty);


--
-- Name: professional_languages professional_languages_professional_id_fkey; Type: FK CONSTRAINT; Schema: nf4; Owner: -
--

ALTER TABLE ONLY nf4.professional_languages
    ADD CONSTRAINT professional_languages_professional_id_fkey FOREIGN KEY (professional_id) REFERENCES nf4.professionals(professional_id);


--
-- Name: professional_specialties professional_specialties_professional_id_fkey; Type: FK CONSTRAINT; Schema: nf4; Owner: -
--

ALTER TABLE ONLY nf4.professional_specialties
    ADD CONSTRAINT professional_specialties_professional_id_fkey FOREIGN KEY (professional_id) REFERENCES nf4.professionals(professional_id);


--
-- Name: profile_before profile_before_professional_id_fkey; Type: FK CONSTRAINT; Schema: nf4; Owner: -
--

ALTER TABLE ONLY nf4.profile_before
    ADD CONSTRAINT profile_before_professional_id_fkey FOREIGN KEY (professional_id) REFERENCES nf4.professionals(professional_id);


--
-- PostgreSQL database dump complete
--

\unrestrict Miov8SfgyKfj9n13OSdm53CfSJHkVSEXIcBE5N4e5PjQbHrigBkjU5q7KEl5jb6

