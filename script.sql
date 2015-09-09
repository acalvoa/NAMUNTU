create table USER(
id_user serial primary key, nick varchar(40), email varchar(40), country varchar(40), id_social_network varchar(20), img_ref varchar(20), id_lang int, id_act int);

create table SOCIAL_NETWORK(
id_network varchar(20) primary key, name varchar(20));

create table IMAGES(
id_img int primary key, id_img_user int references USER(id_user), image bytea);

create table LANGUAGE(
id_lang_user int primary key references USER(id_user), lang varchar(20), priority int);

create table USERS_ACTIVITY(
id_act_user int primary key references USER(id_user), id_act int references ACTIVITY(id_activity);

create table ACTIVITY(
id_activity int primary key);
