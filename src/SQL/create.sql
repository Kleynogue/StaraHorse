--ENTIDADES FUERTES

CREATE TABLE LUGAR(
    Luga_ID serial,
    Luga_Tipo VARCHAR not null,
    Luga_Nombre VARCHAR not null,
    FK_Lugar integer,
    CONSTRAINT pk_lugar PRIMARY KEY(Luga_ID),
    CONSTRAINT divide FOREIGN KEY(FK_Lugar) REFERENCES LUGAR(Luga_ID),
    CONSTRAINT tipo_lugar CHECK(Luga_Tipo like 'Municipio' or Luga_Tipo like 'Parroquia' or Luga_Tipo like 'Estado')
);

CREATE TABLE JINETE(
    Jine_Pers_ID serial,
    Jine_Pers_p_Nombre VARCHAR not null,
    Jine_Pers_s_Nombre VARCHAR,
    Jine_Pers_p_Apellido VARCHAR not null,
    Jine_Pers_s_Apellido VARCHAR,
    Jine_Pers_CI integer not null,
    Jine_Altura numeric not null,
    Jine_Peso numeric not NULL,
    Jine_Fecha_Nac date not null,
    CONSTRAINT pk_jinete PRIMARY KEY(Jine_Pers_ID)
);

CREATE TABLE ENTRENADOR(
    Entr_Pers_ID serial,
    Entr_Pers_p_Nombre VARCHAR not null,
    Entr_Pers_s_Nombre VARCHAR,
    Entr_Pers_p_Apellido VARCHAR not null,
    Entr_Pers_s_Apellido VARCHAR,
    Entr_Pers_CI integer not null,
    Entr_Fecha_Nac date not null,
    CONSTRAINT pk_entrenador PRIMARY KEY(Entr_Pers_ID)
);

CREATE TABLE PROPIETARIO(
    Prop_Pers_ID serial,
    Prop_Pers_p_Nombre VARCHAR not null,
    Prop_Pers_s_Nombre VARCHAR,
    Prop_Pers_p_Apellido VARCHAR not null,
    Prop_Pers_s_Apellido VARCHAR,
    Prop_Pers_CI integer not null,
    Prop_Direccion VARCHAR,
    Prop_Correo VARCHAR,
    Prop_Fecha_Nac date not null,
    Prop_FK_Lugar integer,
    CONSTRAINT pk_propietario PRIMARY KEY(Prop_Pers_ID),
    CONSTRAINT reside FOREIGN KEY(Prop_FK_Lugar) REFERENCES LUGAR(Luga_ID)
);

CREATE TABLE VETERINARIO(
    Vete_Pers_ID serial,
    Vete_Pers_p_Nombre VARCHAR not null,
    Vete_Pers_s_Nombre VARCHAR,
    Vete_Pers_p_Apellido VARCHAR not null,
    Vete_Pers_s_Apellido VARCHAR,
    Vete_Pers_CI integer not null,
    Vete_Titulo VARCHAR not null,
    Vete_Fecha_Nac date,
    CONSTRAINT pk_veterinario PRIMARY KEY(Vete_Pers_ID)
);

CREATE TABLE VISITANTE(
    Visi_Pers_ID serial,
    Visi_Pers_p_Nombre VARCHAR not null,
    Visi_Pers_s_Nombre VARCHAR,
    Visi_Pers_p_Apellido VARCHAR not null,
    Visi_Pers_s_Apellido VARCHAR,
    Visi_Pers_CI integer not null,
    CONSTRAINT pk_visitante PRIMARY KEY(Visi_Pers_ID)
);

CREATE TABLE STUD(
    Stud_ID serial,
    Stud_Fecha_Creacion date not null,
    Stud_Nombre VARCHAR not null,
    CONSTRAINT pk_stud PRIMARY KEY(Stud_ID)
);

CREATE TABLE TIPO_AREA(
    Tip_Are_ID serial,
    Tip_Are_Nombre VARCHAR not null,
    Tip_Are_Descripcion VARCHAR not null,
    CONSTRAINT pk_tip_are PRIMARY KEY(Tip_Are_ID)
);

CREATE TABLE AREA(
    Area_ID serial,
    Area_Nombre VARCHAR not null,
    Area_Precio_Entrada numeric,
    Area_Nivel integer not null,
    Area_Butacas integer,
    Area_Capacidad integer,
    Area_FK_Area integer,
    Area_FK_Tipo_Area integer not NULL,
    CONSTRAINT pk_area PRIMARY KEY(Area_ID),
    CONSTRAINT compone FOREIGN KEY(Area_FK_Area) REFERENCES Area(Area_ID),
    CONSTRAINT es FOREIGN KEY(Area_FK_Tipo_Area) REFERENCES Tipo_Area(Tip_Are_ID)
);

CREATE TABLE HORARIO_RESTAURANTE(
    Hor_Res_ID serial,
    Hor_Res_Hora_Apertura Time not null,
    Hor_Res_Hora_Cierre time not null,
    Hor_Res_Dia date not null,
    CONSTRAINT pk_horario_restaurante PRIMARY KEY(Hor_Res_ID)
);

CREATE TABLE RESTAURANTE(
    Rest_ID serial,
    Rest_Nombre VARCHAR,
    Rest_Capacidad integer,
    Rest_FK_Horario integer not null,
    Rest_FK_Area integer not null,
    CONSTRAINT pk_restaurante PRIMARY KEY(Rest_ID),
    CONSTRAINT cumple FOREIGN KEY(Rest_FK_Horario) REFERENCES Horario_Restaurante(Hor_Res_ID),
    CONSTRAINT se_encuentra FOREIGN KEY(Rest_FK_Area) REFERENCES Area(Area_ID)
);

CREATE TABLE CABALLERIZA(
    Caba_ID serial,
    Caba_Capacidad integer not null,
    Caba_Funcional boolean not null,
    Caba_FK_Area integer not null,
    CONSTRAINT pk_caballeriza PRIMARY KEY(Caba_ID),
    CONSTRAINT se_aloja FOREIGN KEY(Caba_FK_Area) REFERENCES Area(Area_ID)
);

CREATE TABLE HACIENDA(
    Haci_ID serial,
    Haci_Nombre VARCHAR not null,
    Haci_Direccion VARCHAR not null,
    Haci_FK_Lugar integer not null,
    CONSTRAINT pk_hacienda PRIMARY KEY(Haci_ID),
    CONSTRAINT localiza FOREIGN KEY(Haci_FK_Lugar) REFERENCES Lugar(Luga_ID)
);

CREATE TABLE IMPLEMENTO(
    Impl_ID serial,
    Impl_Nombre VARCHAR not null,
    Impl_Abreviacion VARCHAR not null,
    CONSTRAINT pk_implemento PRIMARY KEY(Impl_ID)
);

CREATE TABLE MEDICAMENTO(
    Medi_ID serial,
    Medi_Nombre VARCHAR not null,
    Medi_Descripcion VARCHAR not null,
    CONSTRAINT pk_medicamento PRIMARY KEY(Medi_ID)
);

CREATE TABLE TIPO_APUESTA(
    Tip_Apu_ID serial,
    Tip_Apu_Nombre VARCHAR not null,
    Tip_Apu_Descripcion VARCHAR not null,
    CONSTRAINT pk_tipo_apuesta PRIMARY KEY(Tip_Apu_ID)
);

CREATE TABLE MOTIVO_RETIRO(
    Mot_Ret_ID serial,
    Mot_Ret_Descripcion VARCHAR,
    CONSTRAINT pk_motivo_retiro PRIMARY KEY(Mot_Ret_ID)
);

CREATE TABLE PISTA(
    Pist_ID serial,
    Pist_Longitud integer not null,
    Pist_Capacidad integer not null,
    CONSTRAINT pk_pista PRIMARY KEY(Pist_ID)
);

CREATE TABLE CATEGORIA_CARRERA(
    Cat_Car_ID serial,
    Cat_Car_Nombre VARCHAR not null,
    Cat_Car_Descripcion VARCHAR not null,
    CONSTRAINT pk_categoria_carrera PRIMARY KEY(Cat_Car_ID)
);

CREATE TABLE CARRERA(
    Carr_ID serial,
    Carr_Nombre VARCHAR not null,
    Carr_Fecha date not null,
    Carr_Numero_Llamado integer not null,
    Carr_Distancia integer not null,
    Carr_Descripcion VARCHAR not null,
    Carr_Edad_Min integer not null,
    Carr_Edad_Max integer,
    Carr_Sexo VARCHAR not null,
    Carr_Min_Carreras_Ganadas integer not null,
    Carr_Max_Carreras_Ganadas integer,
    Carr_Reclamo boolean not null,
    Carr_FK_Pista integer not null,
    Carr_FK_Cat_Car integer not null,
    CONSTRAINT pk_carrera PRIMARY KEY(Carr_ID),
    CONSTRAINT ocurre FOREIGN KEY(Carr_FK_Pista) REFERENCES PISTA(Pist_ID),
    CONSTRAINT presenta FOREIGN KEY(Carr_FK_Cat_Car) REFERENCES CATEGORIA_CARRERA(Cat_Car_ID),
    CONSTRAINT sexo_ejemplar CHECK(Carr_Sexo like 'Caballo' or Carr_Sexo like 'Yegua')
);

CREATE TABLE EJEMPLAR(
    Ejem_ID serial,
    Ejem_Nombre VARCHAR not null,
    Ejem_Num_Tatuaje integer not null,
    Ejem_Pelaje VARCHAR not null,
    Ejem_Sexo VARCHAR not null,
    Ejem_Fecha_Nacimiento date not null,
    Ejem_Fecha_Ingreso date not null,
    Ejem_FK_Padre integer,
    Ejem_FK_Madre integer,
    Ejem_FK_Hacienda integer not null,
    CONSTRAINT pk_ejemplar PRIMARY KEY(Ejem_ID),
    CONSTRAINT padre FOREIGN KEY(Ejem_FK_Padre) REFERENCES EJEMPLAR(Ejem_ID),
    CONSTRAINT madre FOREIGN KEY(Ejem_FK_Madre) REFERENCES EJEMPLAR(Ejem_ID),
    CONSTRAINT proviene FOREIGN KEY(Ejem_FK_Hacienda) REFERENCES HACIENDA(Haci_ID),
    CONSTRAINT tipo_pelaje CHECK(Ejem_Pelaje like 'Castaño' or Ejem_Pelaje like 'Alazan' or Ejem_Pelaje like 'Zaino' or Ejem_Pelaje like 'Tordillo'),
    CONSTRAINT ejemplar_sexo CHECK(Ejem_Sexo like 'Caballo' or Ejem_Sexo like 'Yegua')
);

CREATE TABLE UNIFORME(
    Unif_ID serial,
    Unif_Tipo VARCHAR not null,
    Unif_Descripcion VARCHAR not null,
    Unif_Estatus VARCHAR not null,
    Unif_FK_Stud integer not null,
    CONSTRAINT pk_uniforme PRIMARY KEY(Unif_ID),
    CONSTRAINT viste FOREIGN KEY(Unif_FK_Stud) REFERENCES STUD(Stud_ID),
    CONSTRAINT tipo_uniforme CHECK(Unif_Tipo like 'Gorra' or Unif_Tipo like 'Chaquetilla'),
    CONSTRAINT estado_uniforme CHECK(Unif_Estatus like 'Activo' or Unif_Estatus like 'Desuso')
);

CREATE TABLE TELEFONO(
    Tele_ID serial,
    Tele_Tipo VARCHAR not null,
    Tele_Numero VARCHAR not null,
    Tele_FK_Propietario integer not null,
    CONSTRAINT pk_telefono PRIMARY KEY(Tele_ID),
    CONSTRAINT tipo_telefono CHECK(Tele_Tipo like 'Local' or Tele_Tipo like 'Celular'),
    CONSTRAINT utiliza FOREIGN KEY(Tele_FK_Propietario) REFERENCES PROPIETARIO(Prop_Pers_ID)
);

CREATE TABLE USUARIO(
    Usua_ID serial,
    Usua_Nombre VARCHAR not null unique,
    Usua_Contrasena VARCHAR not null,
    Usua_FK_Propietario integer unique,
    Usua_FK_Jinete integer unique,
    Usua_FK_Entrenador integer unique,
    Usua_FK_Veterinario integer unique,
    Usua_FK_Visitante integer unique,
    CONSTRAINT pk_usuario PRIMARY KEY(Usua_ID),
    CONSTRAINT propietario_representa FOREIGN KEY(Usua_FK_Propietario) REFERENCES PROPIETARIO(Prop_Pers_ID),
    CONSTRAINT jinete_representa FOREIGN KEY(Usua_FK_Jinete) REFERENCES JINETE(Jine_Pers_ID),
    CONSTRAINT entrenador_representa FOREIGN KEY(Usua_FK_Entrenador) REFERENCES ENTRENADOR(Entr_Pers_ID),
    CONSTRAINT veterinario_representa FOREIGN KEY(Usua_FK_Veterinario) REFERENCES VETERINARIO(Vete_Pers_ID),
    CONSTRAINT visitante_representa FOREIGN KEY(Usua_FK_Visitante) REFERENCES VISITANTE(Visi_Pers_ID)
);

CREATE TABLE ROL(
    Rol_ID serial,
    Rol_Nombre VARCHAR not null,
    Rol_Descripcion VARCHAR not null,
    CONSTRAINT pk_rol PRIMARY KEY(Rol_ID)
);

CREATE TABLE PERMISO(
    Perm_ID serial,
    Perm_Nombre VARCHAR not null,
    Perm_Descripcion VARCHAR not null,
    CONSTRAINT pk_permiso PRIMARY KEY(Perm_ID)
);

CREATE TABLE ENFERMEDAD(
    Enfe_ID serial,
    Enfe_Nombre VARCHAR not null,
    Enfe_Descripcion VARCHAR not null,
    CONSTRAINT pk_enfermedad PRIMARY KEY(Enfe_ID)
);

CREATE TABLE COLOR(
    Colo_ID serial,
    Colo_Nombre VARCHAR not null,
    CONSTRAINT pk_color PRIMARY KEY(Colo_ID)
);

CREATE TABLE TARJETA(
    Tarj_Met_Pag_ID serial,
    Tarj_Met_Pag_Descripcion VARCHAR,
    Tarj_Nro VARCHAR not null,
    Tarj_Tipo VARCHAR not null,
    Tarj_Fecha_Venc date not null,
    CONSTRAINT pk_tarjeta PRIMARY KEY(Tarj_Met_Pag_ID),
    CONSTRAINT tipo_tarjeta CHECK(Tarj_Tipo like 'Debito' or Tarj_Tipo like 'Credito')
);

CREATE TABLE EFECTIVO(
    Efec_Met_Pag_ID serial,
    Efec_Met_Pag_Descripcion VARCHAR not null,
    Efec_Denominacion VARCHAR not null,
    CONSTRAINT pk_efectivo PRIMARY KEY(Efec_Met_Pag_ID)
);

CREATE TABLE TAQUILLA(
    Taqu_ID serial,
    Taqu_Nro integer not null,
    Taqu_Tipo VARCHAR not null,
    Taqu_FK_Area integer not null,
    CONSTRAINT pk_taquilla PRIMARY KEY(Taqu_ID),
    CONSTRAINT se_ubica FOREIGN KEY(Taqu_FK_Area) REFERENCES AREA(Area_ID),
    CONSTRAINT tipo_taquilla CHECK(Taqu_Tipo like 'Boletos' or Taqu_Tipo like 'Apuestas')
);

CREATE TABLE APUESTA(
    Apue_ID serial,
    Apue_Descripcion VARCHAR not null,
    Apue_Monto numeric not null,
    Apue_Cobrada boolean,
    Apue_Fecha date not null,
    Apue_FK_Usuario integer,
    Apue_FK_Propietario integer,
    Apue_FK_Entrenador integer,
    Apue_FK_Veterinario integer,
    Apue_FK_Visitante integer,
    Apue_FK_Taquilla integer,
    Apue_FK_Tipo_Apuesta integer,
    CONSTRAINT pk_apuesta PRIMARY KEY(Apue_ID),
    CONSTRAINT realiza FOREIGN KEY(Apue_FK_Taquilla) REFERENCES Taquilla(Taqu_ID),
    CONSTRAINT propietario_ejecuta FOREIGN KEY(Apue_FK_Propietario) REFERENCES PROPIETARIO(Prop_Pers_ID),
    CONSTRAINT entrenador_ejecuta FOREIGN KEY(Apue_FK_Entrenador) REFERENCES ENTRENADOR(Entr_Pers_ID),
    CONSTRAINT veterinario_ejecuta FOREIGN KEY(Apue_FK_Veterinario) REFERENCES VETERINARIO(Vete_Pers_ID),
    CONSTRAINT visitante_ejecuta FOREIGN KEY(Apue_FK_Visitante) REFERENCES VISITANTE(Visi_Pers_ID),
    CONSTRAINT efectua FOREIGN KEY(Apue_FK_Usuario) REFERENCES USUARIO(Usua_ID),
    CONSTRAINT abarca FOREIGN KEY(Apue_FK_Tipo_Apuesta) REFERENCES TIPO_APUESTA(Tip_Apu_ID)
);

/*CREATE TABLE DISTANCIA_PARCIAL(
    Dis_Par_ID serial,
    Dis_Par_Distancia_Recorrida integer not null,
    Dis_Par_Tiempo time not null,
    Dis_Par_Posicion integer not null,
    Dis_Par_FK_Ins_1 integer not null,
    Dis_Par_FK_Ins_2 integer not null,
    Dis_Par_FK_Ins_3 integer not null,
    CONSTRAINT pk_distancia_par PRIMARY KEY(Dis_Par_ID)
);*/