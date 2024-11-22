toc.dat                                                                                             0000600 0004000 0002000 00000030740 14720206123 0014440 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP       9            
    |            bdapi    17.2    17.2 &    !           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false         "           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false         #           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false         $           1262    16388    bdapi    DATABASE     |   CREATE DATABASE bdapi WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE bdapi;
                     postgres    false         �            1259    16396    questionario_questionarioid_seq    SEQUENCE     �   CREATE SEQUENCE public.questionario_questionarioid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 6   DROP SEQUENCE public.questionario_questionarioid_seq;
       public               postgres    false         �            1259    16397    questionario    TABLE       CREATE TABLE public.questionario (
    questionarioid smallint DEFAULT nextval('public.questionario_questionarioid_seq'::regclass) NOT NULL,
    questionariotitulo character varying(40),
    questionarioordem smallint,
    questionariostatus character varying(40)
);
     DROP TABLE public.questionario;
       public         heap r       postgres    false    219         �            1259    16403 '   questionarioitem_questionarioitemid_seq    SEQUENCE     �   CREATE SEQUENCE public.questionarioitem_questionarioitemid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 >   DROP SEQUENCE public.questionarioitem_questionarioitemid_seq;
       public               postgres    false         �            1259    16404    questionarioitem    TABLE       CREATE TABLE public.questionarioitem (
    questionarioitemid smallint DEFAULT nextval('public.questionarioitem_questionarioitemid_seq'::regclass) NOT NULL,
    questionarioid smallint,
    questionarioitemconteudo character varying,
    questionarioitemrespostacorret boolean
);
 $   DROP TABLE public.questionarioitem;
       public         heap r       postgres    false    221         �            1259    16389    usuario_usuarioid_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_usuarioid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 ,   DROP SEQUENCE public.usuario_usuarioid_seq;
       public               postgres    false         �            1259    16390    usuario    TABLE     G  CREATE TABLE public.usuario (
    usuarioid smallint DEFAULT nextval('public.usuario_usuarioid_seq'::regclass) NOT NULL,
    usuarionome character varying(40),
    usuarioemail character varying(100),
    usuariosenha character varying(255),
    usuariostatus character varying(40),
    usuarioestagio character varying(40)
);
    DROP TABLE public.usuario;
       public         heap r       postgres    false    217         �            1259    16416 -   usuarioquestionario_usuarioquestionarioid_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarioquestionario_usuarioquestionarioid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 D   DROP SEQUENCE public.usuarioquestionario_usuarioquestionarioid_seq;
       public               postgres    false         �            1259    16417    usuarioquestionario    TABLE       CREATE TABLE public.usuarioquestionario (
    usuarioquestionarioid smallint DEFAULT nextval('public.usuarioquestionario_usuarioquestionarioid_seq'::regclass) NOT NULL,
    usuarioid smallint,
    usuarioquestionarioestagio character varying(40),
    questionarioid smallint
);
 '   DROP TABLE public.usuarioquestionario;
       public         heap r       postgres    false    223         �            1259    16435 5   usuarioquestionarioitem_usuarioquestionarioitemid_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarioquestionarioitem_usuarioquestionarioitemid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;
 L   DROP SEQUENCE public.usuarioquestionarioitem_usuarioquestionarioitemid_seq;
       public               postgres    false         �            1259    16436    usuarioquestionarioitem    TABLE       CREATE TABLE public.usuarioquestionarioitem (
    usuarioquestionarioitemid smallint DEFAULT nextval('public.usuarioquestionarioitem_usuarioquestionarioitemid_seq'::regclass) NOT NULL,
    usuarioquestionarioid smallint,
    usuarioquestionarioitemresposta smallint
);
 +   DROP TABLE public.usuarioquestionarioitem;
       public         heap r       postgres    false    225                   0    16397    questionario 
   TABLE DATA           q   COPY public.questionario (questionarioid, questionariotitulo, questionarioordem, questionariostatus) FROM stdin;
    public               postgres    false    220       4888.dat           0    16404    questionarioitem 
   TABLE DATA           �   COPY public.questionarioitem (questionarioitemid, questionarioid, questionarioitemconteudo, questionarioitemrespostacorret) FROM stdin;
    public               postgres    false    222       4890.dat           0    16390    usuario 
   TABLE DATA           t   COPY public.usuario (usuarioid, usuarionome, usuarioemail, usuariosenha, usuariostatus, usuarioestagio) FROM stdin;
    public               postgres    false    218       4886.dat           0    16417    usuarioquestionario 
   TABLE DATA           {   COPY public.usuarioquestionario (usuarioquestionarioid, usuarioid, usuarioquestionarioestagio, questionarioid) FROM stdin;
    public               postgres    false    224       4892.dat           0    16436    usuarioquestionarioitem 
   TABLE DATA           �   COPY public.usuarioquestionarioitem (usuarioquestionarioitemid, usuarioquestionarioid, usuarioquestionarioitemresposta) FROM stdin;
    public               postgres    false    226       4894.dat %           0    0    questionario_questionarioid_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.questionario_questionarioid_seq', 1, false);
          public               postgres    false    219         &           0    0 '   questionarioitem_questionarioitemid_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.questionarioitem_questionarioitemid_seq', 1, false);
          public               postgres    false    221         '           0    0    usuario_usuarioid_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.usuario_usuarioid_seq', 3, true);
          public               postgres    false    217         (           0    0 -   usuarioquestionario_usuarioquestionarioid_seq    SEQUENCE SET     [   SELECT pg_catalog.setval('public.usuarioquestionario_usuarioquestionarioid_seq', 4, true);
          public               postgres    false    223         )           0    0 5   usuarioquestionarioitem_usuarioquestionarioitemid_seq    SEQUENCE SET     d   SELECT pg_catalog.setval('public.usuarioquestionarioitem_usuarioquestionarioitemid_seq', 1, false);
          public               postgres    false    225         s           2606    16402    questionario questionario_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.questionario
    ADD CONSTRAINT questionario_pkey PRIMARY KEY (questionarioid);
 H   ALTER TABLE ONLY public.questionario DROP CONSTRAINT questionario_pkey;
       public                 postgres    false    220         v           2606    16409 &   questionarioitem questionarioitem_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.questionarioitem
    ADD CONSTRAINT questionarioitem_pkey PRIMARY KEY (questionarioitemid);
 P   ALTER TABLE ONLY public.questionarioitem DROP CONSTRAINT questionarioitem_pkey;
       public                 postgres    false    222         q           2606    16395    usuario usuario_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (usuarioid);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public                 postgres    false    218         z           2606    16451 .   usuarioquestionario usuario_questionario_unico 
   CONSTRAINT     ~   ALTER TABLE ONLY public.usuarioquestionario
    ADD CONSTRAINT usuario_questionario_unico UNIQUE (usuarioid, questionarioid);
 X   ALTER TABLE ONLY public.usuarioquestionario DROP CONSTRAINT usuario_questionario_unico;
       public                 postgres    false    224    224         |           2606    16422 ,   usuarioquestionario usuarioquestionario_pkey 
   CONSTRAINT     }   ALTER TABLE ONLY public.usuarioquestionario
    ADD CONSTRAINT usuarioquestionario_pkey PRIMARY KEY (usuarioquestionarioid);
 V   ALTER TABLE ONLY public.usuarioquestionario DROP CONSTRAINT usuarioquestionario_pkey;
       public                 postgres    false    224                    2606    16441 4   usuarioquestionarioitem usuarioquestionarioitem_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.usuarioquestionarioitem
    ADD CONSTRAINT usuarioquestionarioitem_pkey PRIMARY KEY (usuarioquestionarioitemid);
 ^   ALTER TABLE ONLY public.usuarioquestionarioitem DROP CONSTRAINT usuarioquestionarioitem_pkey;
       public                 postgres    false    226         w           1259    16433    fk_questionario    INDEX     Y   CREATE INDEX fk_questionario ON public.usuarioquestionario USING btree (questionarioid);
 #   DROP INDEX public.fk_questionario;
       public                 postgres    false    224         t           1259    16415    fk_questionarioid    INDEX     X   CREATE INDEX fk_questionarioid ON public.questionarioitem USING btree (questionarioid);
 %   DROP INDEX public.fk_questionarioid;
       public                 postgres    false    222         x           1259    16434 
   fk_usuario    INDEX     O   CREATE INDEX fk_usuario ON public.usuarioquestionario USING btree (usuarioid);
    DROP INDEX public.fk_usuario;
       public                 postgres    false    224         }           1259    16447    fk_usuarioquestionarioid    INDEX     m   CREATE INDEX fk_usuarioquestionarioid ON public.usuarioquestionarioitem USING btree (usuarioquestionarioid);
 ,   DROP INDEX public.fk_usuarioquestionarioid;
       public                 postgres    false    226         �           2606    16423 #   usuarioquestionario fk_questionario    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarioquestionario
    ADD CONSTRAINT fk_questionario FOREIGN KEY (questionarioid) REFERENCES public.questionario(questionarioid);
 M   ALTER TABLE ONLY public.usuarioquestionario DROP CONSTRAINT fk_questionario;
       public               postgres    false    220    4723    224         �           2606    16410 "   questionarioitem fk_questionarioid    FK CONSTRAINT     �   ALTER TABLE ONLY public.questionarioitem
    ADD CONSTRAINT fk_questionarioid FOREIGN KEY (questionarioid) REFERENCES public.questionario(questionarioid);
 L   ALTER TABLE ONLY public.questionarioitem DROP CONSTRAINT fk_questionarioid;
       public               postgres    false    4723    220    222         �           2606    16428    usuarioquestionario fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarioquestionario
    ADD CONSTRAINT fk_usuario FOREIGN KEY (usuarioid) REFERENCES public.usuario(usuarioid) ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.usuarioquestionario DROP CONSTRAINT fk_usuario;
       public               postgres    false    224    4721    218         �           2606    16442 0   usuarioquestionarioitem fk_usuarioquestionarioid    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarioquestionarioitem
    ADD CONSTRAINT fk_usuarioquestionarioid FOREIGN KEY (usuarioquestionarioid) REFERENCES public.usuarioquestionario(usuarioquestionarioid);
 Z   ALTER TABLE ONLY public.usuarioquestionarioitem DROP CONSTRAINT fk_usuarioquestionarioid;
       public               postgres    false    4732    224    226                                        4888.dat                                                                                            0000600 0004000 0002000 00000000361 14720206123 0014262 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Cultura e Mindset ágil	1	EmAberto
2	Princípios e Valores	2	EmAberto
3	Papéis do Scrum	3	EmAberto
4	Artefatos do Scrum	4	EmAberto
5	Eventos do Scrum	5	EmAberto
6	Framework de trabalho	6	EmAberto
7	Técnicas e ferramentas	7	EmAberto
\.


                                                                                                                                                                                                                                                                               4890.dat                                                                                            0000600 0004000 0002000 00000006511 14720206123 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	O principal foco do Manifesto Ágil é em indivíduos e interações, software funcionando, colaboração com o cliente e responder a mudanças.	t
2	1	O mindset ágil em uma organização é caracterizado pela manutenção de uma cultura que valoriza a adaptabilidade, a colaboração e a melhoria contínua.	t
3	1	O Manifesto Ágil é um documento formal, enquanto o mindset ágil é uma atitude e cultura que suporta a aplicação desse manifesto.	t
4	2	Os pilares do Scrum são fundamentais para a prática ágil e incluem Transparência, Inspeção e Adaptação. No que diz respeito ao pilar da Transparência, é correto afirmar que a Transparência é alcançada apenas com a realização de reuniões diárias, sendo dispensável o uso de ferramentas visuais como quadros Kanban ou burndown charts para acompanhar o progresso do projeto.	f
5	2	No contexto dos valores do Scrum, o Comprometimento é crucial para o sucesso da equipe. Nesse sentido, o comprometimento é melhor praticado quando todos os membros da equipe conhecem suas responsabilidades e estão motivados para alcançar os objetivos do projeto, com um foco compartilhado nos resultados.	t
6	2	Um projeto Scrum está desenvolvendo um novo aplicativo de e-commerce. Durante a Sprint, um novo regulamento governamental é anunciado, exigindo mudanças significativas na forma como os dados dos clientes são armazenados e processados. Nesse contexto, a melhor abordagem para o time Scrum é avaliar o impacto das mudanças e ajustar o Sprint Backlog conforme necessário.	t
7	3	É de responsabilidade exclusiva do Product Owner (PO) em uma equipe Scrum facilitar a realização de reuniões diárias.	f
8	3	A principal responsabilidade do Scrum Master é entregar incrementos funcionais do produto.	f
9	3	O Time de Desenvolvimento deve decidir como realizar o trabalho e auto-organizar-se.	t
10	4	O Product Backlog no Scrum é uma lista priorizada de tudo o que precisa ser feito no produto.	t
11	4	O Scrum Master é o responsável por gerenciar o Product Backlog.	f
12	4	O Incremento no Scrum é a soma dos itens concluídos durante uma Sprint, pronta para ser lançada.	t
13	5	O principal objetivo de uma Sprint no Scrum é entregar um incremento potencialmente utilizável do produto ao final do ciclo de trabalho.	t
14	5	Durante o Sprint Planning, é realizada uma demonstração do trabalho concluído durante a Sprint.	f
15	5	O propósito principal da Daily Scrum é sincronizar as atividades da equipe, discutir o progresso e identificar impedimentos.	t
16	6	Estruturação é uma característica essencial de um framework de trabalho, pois organiza as atividades de forma lógica e sequencial.	t
17	6	Ken Schwaber é o criador do framework Ruby on Rails, amplamente utilizado no desenvolvimento web.	f
18	6	Scrum é um framework amplamente utilizado na gestão ágil de projetos.	t
19	7	O gráfico de Burndown mostra a quantidade de código escrito durante o Sprint.	f
20	7	O método de Planning Poker promove a discussão e o consenso entre os membros da equipe sobre o esforço necessário, sendo esse seu benefício primário em comparação a métodos tradicionais de estimativa.	t
21	7	A Definition of Done em um projeto Scrum serve como um checklist que deve ser seguido para considerar uma tarefa como concluída, ajudando a alinhar as expectativas da equipe e aumentar a qualidade do trabalho entregue.	t
\.


                                                                                                                                                                                       4886.dat                                                                                            0000600 0004000 0002000 00000000156 14720206123 0014262 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        3	Carlos	carlosedsmagalhaes@gmail.com	$2b$10$eLguC0xU/NC1QZ9VYoPGUO68SVB0yD9l9JN2kPqcmT25KpF0zALgG	\N	\N
\.


                                                                                                                                                                                                                                                                                                                                                                                                                  4892.dat                                                                                            0000600 0004000 0002000 00000000024 14720206123 0014251 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        4	3	Aprovado	1
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            4894.dat                                                                                            0000600 0004000 0002000 00000000005 14720206123 0014252 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           restore.sql                                                                                         0000600 0004000 0002000 00000025443 14720206123 0015371 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

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

DROP DATABASE bdapi;
--
-- Name: bdapi; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE bdapi WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';


ALTER DATABASE bdapi OWNER TO postgres;

\connect bdapi

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
-- Name: questionario_questionarioid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.questionario_questionarioid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;


ALTER SEQUENCE public.questionario_questionarioid_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: questionario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questionario (
    questionarioid smallint DEFAULT nextval('public.questionario_questionarioid_seq'::regclass) NOT NULL,
    questionariotitulo character varying(40),
    questionarioordem smallint,
    questionariostatus character varying(40)
);


ALTER TABLE public.questionario OWNER TO postgres;

--
-- Name: questionarioitem_questionarioitemid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.questionarioitem_questionarioitemid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;


ALTER SEQUENCE public.questionarioitem_questionarioitemid_seq OWNER TO postgres;

--
-- Name: questionarioitem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questionarioitem (
    questionarioitemid smallint DEFAULT nextval('public.questionarioitem_questionarioitemid_seq'::regclass) NOT NULL,
    questionarioid smallint,
    questionarioitemconteudo character varying,
    questionarioitemrespostacorret boolean
);


ALTER TABLE public.questionarioitem OWNER TO postgres;

--
-- Name: usuario_usuarioid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_usuarioid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;


ALTER SEQUENCE public.usuario_usuarioid_seq OWNER TO postgres;

--
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    usuarioid smallint DEFAULT nextval('public.usuario_usuarioid_seq'::regclass) NOT NULL,
    usuarionome character varying(40),
    usuarioemail character varying(100),
    usuariosenha character varying(255),
    usuariostatus character varying(40),
    usuarioestagio character varying(40)
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- Name: usuarioquestionario_usuarioquestionarioid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarioquestionario_usuarioquestionarioid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;


ALTER SEQUENCE public.usuarioquestionario_usuarioquestionarioid_seq OWNER TO postgres;

--
-- Name: usuarioquestionario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarioquestionario (
    usuarioquestionarioid smallint DEFAULT nextval('public.usuarioquestionario_usuarioquestionarioid_seq'::regclass) NOT NULL,
    usuarioid smallint,
    usuarioquestionarioestagio character varying(40),
    questionarioid smallint
);


ALTER TABLE public.usuarioquestionario OWNER TO postgres;

--
-- Name: usuarioquestionarioitem_usuarioquestionarioitemid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarioquestionarioitem_usuarioquestionarioitemid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 32767
    CACHE 1;


ALTER SEQUENCE public.usuarioquestionarioitem_usuarioquestionarioitemid_seq OWNER TO postgres;

--
-- Name: usuarioquestionarioitem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarioquestionarioitem (
    usuarioquestionarioitemid smallint DEFAULT nextval('public.usuarioquestionarioitem_usuarioquestionarioitemid_seq'::regclass) NOT NULL,
    usuarioquestionarioid smallint,
    usuarioquestionarioitemresposta smallint
);


ALTER TABLE public.usuarioquestionarioitem OWNER TO postgres;

--
-- Data for Name: questionario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionario (questionarioid, questionariotitulo, questionarioordem, questionariostatus) FROM stdin;
\.
COPY public.questionario (questionarioid, questionariotitulo, questionarioordem, questionariostatus) FROM '$$PATH$$/4888.dat';

--
-- Data for Name: questionarioitem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionarioitem (questionarioitemid, questionarioid, questionarioitemconteudo, questionarioitemrespostacorret) FROM stdin;
\.
COPY public.questionarioitem (questionarioitemid, questionarioid, questionarioitemconteudo, questionarioitemrespostacorret) FROM '$$PATH$$/4890.dat';

--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (usuarioid, usuarionome, usuarioemail, usuariosenha, usuariostatus, usuarioestagio) FROM stdin;
\.
COPY public.usuario (usuarioid, usuarionome, usuarioemail, usuariosenha, usuariostatus, usuarioestagio) FROM '$$PATH$$/4886.dat';

--
-- Data for Name: usuarioquestionario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarioquestionario (usuarioquestionarioid, usuarioid, usuarioquestionarioestagio, questionarioid) FROM stdin;
\.
COPY public.usuarioquestionario (usuarioquestionarioid, usuarioid, usuarioquestionarioestagio, questionarioid) FROM '$$PATH$$/4892.dat';

--
-- Data for Name: usuarioquestionarioitem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarioquestionarioitem (usuarioquestionarioitemid, usuarioquestionarioid, usuarioquestionarioitemresposta) FROM stdin;
\.
COPY public.usuarioquestionarioitem (usuarioquestionarioitemid, usuarioquestionarioid, usuarioquestionarioitemresposta) FROM '$$PATH$$/4894.dat';

--
-- Name: questionario_questionarioid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.questionario_questionarioid_seq', 1, false);


--
-- Name: questionarioitem_questionarioitemid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.questionarioitem_questionarioitemid_seq', 1, false);


--
-- Name: usuario_usuarioid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_usuarioid_seq', 3, true);


--
-- Name: usuarioquestionario_usuarioquestionarioid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarioquestionario_usuarioquestionarioid_seq', 4, true);


--
-- Name: usuarioquestionarioitem_usuarioquestionarioitemid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarioquestionarioitem_usuarioquestionarioitemid_seq', 1, false);


--
-- Name: questionario questionario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questionario
    ADD CONSTRAINT questionario_pkey PRIMARY KEY (questionarioid);


--
-- Name: questionarioitem questionarioitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questionarioitem
    ADD CONSTRAINT questionarioitem_pkey PRIMARY KEY (questionarioitemid);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (usuarioid);


--
-- Name: usuarioquestionario usuario_questionario_unico; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarioquestionario
    ADD CONSTRAINT usuario_questionario_unico UNIQUE (usuarioid, questionarioid);


--
-- Name: usuarioquestionario usuarioquestionario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarioquestionario
    ADD CONSTRAINT usuarioquestionario_pkey PRIMARY KEY (usuarioquestionarioid);


--
-- Name: usuarioquestionarioitem usuarioquestionarioitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarioquestionarioitem
    ADD CONSTRAINT usuarioquestionarioitem_pkey PRIMARY KEY (usuarioquestionarioitemid);


--
-- Name: fk_questionario; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_questionario ON public.usuarioquestionario USING btree (questionarioid);


--
-- Name: fk_questionarioid; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_questionarioid ON public.questionarioitem USING btree (questionarioid);


--
-- Name: fk_usuario; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_usuario ON public.usuarioquestionario USING btree (usuarioid);


--
-- Name: fk_usuarioquestionarioid; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_usuarioquestionarioid ON public.usuarioquestionarioitem USING btree (usuarioquestionarioid);


--
-- Name: usuarioquestionario fk_questionario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarioquestionario
    ADD CONSTRAINT fk_questionario FOREIGN KEY (questionarioid) REFERENCES public.questionario(questionarioid);


--
-- Name: questionarioitem fk_questionarioid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questionarioitem
    ADD CONSTRAINT fk_questionarioid FOREIGN KEY (questionarioid) REFERENCES public.questionario(questionarioid);


--
-- Name: usuarioquestionario fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarioquestionario
    ADD CONSTRAINT fk_usuario FOREIGN KEY (usuarioid) REFERENCES public.usuario(usuarioid) ON DELETE CASCADE;


--
-- Name: usuarioquestionarioitem fk_usuarioquestionarioid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarioquestionarioitem
    ADD CONSTRAINT fk_usuarioquestionarioid FOREIGN KEY (usuarioquestionarioid) REFERENCES public.usuarioquestionario(usuarioquestionarioid);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             