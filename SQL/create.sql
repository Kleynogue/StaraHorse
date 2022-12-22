--ENTIDADES FUERTES

CREATE TABLE LUGAR(
    Luga_ID serial,
    Luga_Tipo VARCHAR not null,
    Luga_Nombre VARCHAR not null,
    Luga_FK_Lugar integer,
    CONSTRAINT pk_lugar PRIMARY KEY(Luga_ID),
    CONSTRAINT divide FOREIGN KEY(Luga_FK_Lugar) REFERENCES LUGAR(Luga_ID),
    CONSTRAINT tipo_lugar CHECK(Luga_Tipo IN ('Pais', 'Estado', 'Municipio', 'Parroquia'))
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
    Tip_Apu_Max_Ejemplares integer not null,
    Tip_Apu_Min_Ejemplares integer not null,
    Tip_Apu_Min_Apuesta integer not null,
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
    Carr_Fecha_Hora date not null,
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
    Ejem_Peso numeric(5,2) not null,
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

CREATE TABLE ROL(
    Rol_ID serial,
    Rol_Nombre VARCHAR not null,
    Rol_Descripcion VARCHAR not null,
    CONSTRAINT pk_rol PRIMARY KEY(Rol_ID)
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
    Usua_FK_Rol integer unique,
    CONSTRAINT pk_usuario PRIMARY KEY(Usua_ID),
    CONSTRAINT propietario_representa FOREIGN KEY(Usua_FK_Propietario) REFERENCES PROPIETARIO(Prop_Pers_ID),
    CONSTRAINT jinete_representa FOREIGN KEY(Usua_FK_Jinete) REFERENCES JINETE(Jine_Pers_ID),
    CONSTRAINT entrenador_representa FOREIGN KEY(Usua_FK_Entrenador) REFERENCES ENTRENADOR(Entr_Pers_ID),
    CONSTRAINT veterinario_representa FOREIGN KEY(Usua_FK_Veterinario) REFERENCES VETERINARIO(Vete_Pers_ID),
    CONSTRAINT visitante_representa FOREIGN KEY(Usua_FK_Visitante) REFERENCES VISITANTE(Visi_Pers_ID)
    CONSTRAINT cumple FOREIGN KEY(Usua_FK_Rol) REFERENCES ROL(Rol_ID),

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
    Apue_Dividendo date not null,
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

CREATE TABLE PREMIO(
    Prem_ID serial,
    Prem_Tipo VARCHAR not null,
    Prem_Posicion integer not null,
    CONSTRAINT pk_premio PRIMARY KEY(Prem_ID),
    CONSTRAINT tipo_premio CHECK(Prem_Tipo like 'Normal' or Prem_Tipo like 'Especial')
);

CREATE TABLE ENTRADA_ACCESO(
    Ent_Acc_ID serial,
    Ent_Acc_Nombre VARCHAR not null,
    Ent_Acc_Descripcion VARCHAR not null,
    Ent_Acc_Puestos_Estac integer,
    Ent_Acc_FK_Area integer not null,
    CONSTRAINT pk_entrada_acceso PRIMARY KEY(Ent_Acc_ID),
    CONSTRAINT dispone FOREIGN KEY(Ent_Acc_FK_Area) REFERENCES AREA(Area_ID)
);

CREATE TABLE CUERPO_DIFERENCIA(
    Cue_Dif_ID serial,
    Cue_Dif_Tipo VARCHAR not null,
    Cue_Dif_Cantidad numeric,
    CONSTRAINT pk_cuerpo_diferencia PRIMARY KEY(Cue_Dif_ID)
);

CREATE TABLE MATERIAL(
    Mate_ID serial,
    Mate_Nombre VARCHAR not null,
    Mate_Descripcion VARCHAR not null,
    CONSTRAINT pk_material PRIMARY KEY(Mate_ID)
);

CREATE TABLE BOX(
    Box_ID serial,
    Box_Numero integer not null,
    Box_Descripcion VARCHAR not null,
    Box_FK_Caballeriza integer not null,
    CONSTRAINT pk_box PRIMARY KEY(Box_ID),
    CONSTRAINT compuesta FOREIGN KEY(Box_FK_Caballeriza) REFERENCES CABALLERIZA(Caba_ID)
);

CREATE TABLE BOLETO(
    Bole_Fecha date not null,
    Bole_Valor numeric not null,
    Bole_ID serial,
    Bole_FK_Visitante integer not null,
    Bole_FK_Entrada integer not null,
    Bole_FK_Taquilla integer not null,
    CONSTRAINT pk_boleto PRIMARY KEY(Bole_ID),
    CONSTRAINT compra FOREIGN KEY(Bole_FK_Visitante) REFERENCES VISITANTE(Visi_Pers_ID),
    CONSTRAINT requiere FOREIGN KEY(Bole_FK_Entrada) REFERENCES ENTRADA_ACCESO(Ent_Acc_ID),
    CONSTRAINT consigue FOREIGN KEY(Bole_FK_Taquilla) REFERENCES Taquilla(Taqu_ID)
);

CREATE TABLE PER_ROL(
    Per_Rol_Fecha_Ini date not null,
    Per_Rol_Fecha_Fin date,
    Per_Rol_FK_Rol integer not null,
    Per_Rol_FK_Permiso integer not null,
    Per_Rol_ID serial,
    CONSTRAINT pk_usuario_rol PRIMARY KEY(Per_Rol_ID),
    CONSTRAINT aplica FOREIGN KEY(Per_Rol_FK_Rol) REFERENCES ROL(Rol_ID),
    CONSTRAINT adquiere FOREIGN KEY(Per_Rol_FK_Permiso) REFERENCES PERMISO(Perm_ID)
);

CREATE TABLE EJE_ENT(
    Eje_Ent_Fecha_Ini date not null,
    Eje_Ent_Fecha_Fin date,
    Eje_Ent_FK_Ejemplar integer not null,
    Eje_Ent_FK_Entrenador integer not null,
    Eje_Ent_FK_Box integer not null,
    Eje_Ent_ID serial,
    CONSTRAINT pk_eje_ent PRIMARY KEY(Eje_Ent_ID),
    CONSTRAINT entrenado FOREIGN KEY(Eje_Ent_FK_Ejemplar) REFERENCES EJEMPLAR(Ejem_ID),
    CONSTRAINT entrena FOREIGN KEY(Eje_Ent_FK_Entrenador) REFERENCES ENTRENADOR(Entr_Pers_ID),
    CONSTRAINT ubica FOREIGN KEY(Eje_Ent_FK_Box) REFERENCES BOX(Box_ID)
);

CREATE TABLE CAB_ENT(
    Cab_Ent_Fecha_Ini date not null,
    Cab_Ent_Fecha_Fin date,
    Cab_Ent_FK_Entrenador integer not null,
    Cab_Ent_Fk_Caballeriza integer not null,
    Cab_Ent_ID serial,
    CONSTRAINT pk_cab_ent PRIMARY KEY(Cab_Ent_ID),
    CONSTRAINT cargo FOREIGN KEY(Cab_Ent_Fk_Caballeriza) REFERENCES CABALLERIZA(Caba_ID),
    CONSTRAINT encargado FOREIGN KEY(Cab_Ent_FK_Entrenador) REFERENCES ENTRENADOR(Entr_Pers_ID)
);

CREATE TABLE CAB_VET(
    Cab_Vet_Fecha_Ini date not null,
    Cab_Vet_Fecha_Fin date,
    Cab_Vet_FK_Veterinario integer not null,
    Cab_Vet_FK_Caballeriza integer not null,
    Cab_Vet_ID serial,
    CONSTRAINT pk_cab_vet PRIMARY KEY(Cab_Vet_ID),
    CONSTRAINT atendida FOREIGN KEY(Cab_Vet_FK_Caballeriza) REFERENCES CABALLERIZA(Caba_ID),
    CONSTRAINT atiende FOREIGN KEY(Cab_Vet_FK_Veterinario) REFERENCES VETERINARIO(Vete_Pers_ID)
);

CREATE TABLE ENF_EJE(
    Enf_Eje_Fecha_Ini date not null,
    Enf_Eje_Fecha_Fin date,
    Enf_Eje_FK_Ejemplar integer not null,
    Enf_Eje_FK_Enfermedad integer not null,
    Enf_Eje_FK_Medicamento integer not null,
    Enf_Eje_ID serial,
    CONSTRAINT pk_enf_eje PRIMARY KEY(Enf_Eje_ID),
    CONSTRAINT padece FOREIGN KEY(Enf_Eje_FK_Ejemplar) REFERENCES EJEMPLAR(Ejem_ID),
    CONSTRAINT atenta FOREIGN KEY(Enf_Eje_FK_Enfermedad) REFERENCES ENFERMEDAD(Enfe_ID),
    CONSTRAINT alivia FOREIGN KEY(Enf_Eje_FK_Medicamento) REFERENCES MEDICAMENTO(Medi_ID)
);

CREATE TABLE UNI_COL(
    Uni_Col_FK_Uniforme integer not null,
    Uni_Col_FK_Color integer not null,
    CONSTRAINT pk_uni_col PRIMARY KEY(Uni_Col_FK_Color, Uni_Col_FK_Uniforme),
    CONSTRAINT contiene FOREIGN KEY(Uni_Col_FK_Uniforme) REFERENCES UNIFORME(Unif_ID),
    CONSTRAINT encuentra FOREIGN KEY(Uni_Col_FK_Color) REFERENCES COLOR(Colo_ID)
);

CREATE TABLE EJE_PRO_STUD(
    Eje_Pro_Stud_Porcentaje integer not null,
    Eje_Pro_Stud_Fecha_Compra date not null,
    Eje_Pro_Stud_Fecha_Venta date,
    Eje_Pro_Stud_Fecha_Ini date not null,
    Eje_Pro_Stud_Fecha_fin date,
    Eje_Pro_Stud_FK_Stud integer not null,
    Eje_Pro_Stud_FK_Ejemplar integer not null,
    Eje_Pro_Stud_FK_Propietario integer not null,
    Eje_Pro_Stud_ID serial,
    CONSTRAINT pk_eje_stu PRIMARY KEY(Eje_Pro_Stud_ID),
    CONSTRAINT conserva FOREIGN KEY(Eje_Pro_Stud_FK_Stud) REFERENCES STUD(Stud_ID),
    CONSTRAINT poseido FOREIGN KEY(Eje_Pro_Stud_FK_Ejemplar) REFERENCES EJEMPLAR(Ejem_ID)
    CONSTRAINT posee FOREIGN KEY(Eje_Pro_Stud_FK_Propietario) REFERENCES PROPIETARIO(Prop_Pers_ID)

);

CREATE TABLE Car_Pre(
    Car_Pre_Monto numeric not null,
    Car_Pre_FK_Carrera integer not null,
    Car_Pre_FK_Premio integer not null,
    CONSTRAINT pk_car_pre PRIMARY KEY(Car_Pre_FK_Carrera, Car_Pre_FK_Premio),
    CONSTRAINT otorga FOREIGN KEY(Car_Pre_FK_Carrera) REFERENCES CARRERA(Carr_ID),
    CONSTRAINT otorgado FOREIGN KEY(Car_Pre_FK_Premio) REFERENCES PREMIO(Prem_ID)
);

CREATE TABLE STU_PRO(
    Stu_Pro_Fecha_Union date not null,
    Stu_Pro_Fecha_Salida date,
    Stu_Pro_Porcentaje integer not null,
    Stu_Pro_FK_Propietario integer not null,
    Stu_Pro_FK_Stud integer not null,
    Stu_Pro_ID serial,
    CONSTRAINT pk_stu_pro PRIMARY KEY(Stu_Pro_ID),
    CONSTRAINT tiene FOREIGN KEY(Stu_Pro_FK_Propietario) REFERENCES PROPIETARIO(Prop_Pers_ID),
    CONSTRAINT propiedad FOREIGN KEY(Stu_Pro_FK_Stud) REFERENCES STUD(Stud_ID),
    CONSTRAINT porcentaje_stud CHECK(Stu_Pro_Porcentaje between 0 and 100)
);

CREATE TABLE MAT_PIS(
    Mat_Pis_FK_Pista integer not null,
    Mat_Pis_FK_Material integer not null,
    CONSTRAINT pk_mat_pis PRIMARY KEY(Mat_Pis_FK_Material, Mat_Pis_FK_Pista),
    CONSTRAINT constituye FOREIGN KEY(Mat_Pis_FK_Material) REFERENCES MATERIAL(Mate_ID),
    CONSTRAINT fabricada FOREIGN KEY(Mat_Pis_FK_Pista) REFERENCES PISTA(Pist_ID)
);

CREATE TABLE ACCION(
    Acci_ID serial,
    Acci_Fecha date not null,
    Acci_Descripcion VARCHAR not null,
    Acci_FK_Per_Rol integer not null,
    Acci_FK_Usuario integer not null,
    CONSTRAINT pk_accion PRIMARY KEY(Acci_ID),
    CONSTRAINT emplea FOREIGN KEY(Acci_FK_Per_Rol) REFERENCES PER_ROL(Per_Rol_ID)
    CONSTRAINT realiza FOREIGN KEY(Acci_FK_Usuario) REFERENCES USUARIO(Usua_ID)
);

CREATE TABLE INSCRIPCION(
    Insc_Precio numeric,
    Insc_Puesto_Partida integer not null,
    Insc_Favorito boolean not null,
    Insc_Num_Favorito integer,
    Insc_Premio_Jinete numeric,
    Insc_Premio_Entrenador numeric,
    Insc_Premio_Propietario numeric,
    Insc_Premio_Stud numeric,
    Insc_FK_Carrera integer not null,
    Insc_FK_Ejemplar integer not null,
    Insc_FK_Jinete integer not null,
    Insc_Num_Gualdrapa integer not null,
    CONSTRAINT pk_inscripcion PRIMARY KEY(Insc_FK_Carrera, Insc_FK_Ejemplar),
    CONSTRAINT posibilita FOREIGN KEY(Insc_FK_Carrera) REFERENCES CARRERA(Carr_ID),
    CONSTRAINT participan FOREIGN KEY(Insc_FK_Ejemplar) REFERENCES EJE_ENT(Eje_Ent_ID),
    CONSTRAINT participa FOREIGN KEY(Insc_FK_Jinete) REFERENCES JINETE(Jine_Pers_ID),
    CONSTRAINT numero_favorito CHECK(Insc_Num_Favorito between 1 and 3)
);



CREATE TABLE PAGO(
    Pago_ID serial,
    Pago_Monto numeric not null,
    Pago_Descripcion VARCHAR not null,
    Pago_Fecha date not null,
    Pago_Nro_Factura integer not null,
    Pago_FK_Apuesta integer,
    Pago_FK_Tarjeta integer,
    Pago_FK_Efectivo integer,
    Pago_FK_Boleto integer,
    CONSTRAINT pk_pago PRIMARY KEY(Pago_ID),
    CONSTRAINT tarjeta_ofrece FOREIGN KEY(Pago_FK_Tarjeta) REFERENCES TARJETA(Tarj_Met_Pag_ID),
    CONSTRAINT efectivo_ofrece FOREIGN KEY(Pago_FK_Efectivo) REFERENCES EFECTIVO(Efec_Met_Pag_ID),
    CONSTRAINT implica FOREIGN KEY(Pago_FK_Apuesta) REFERENCES APUESTA(Apue_ID),
    CONSTRAINT paga FOREIGN KEY(Pago_FK_Boleto) REFERENCES BOLETO(Bole_ID)
);

CREATE TABLE DISTANCIA_PARCIAL(
    Dis_Par_ID serial,
    Dis_Par_Distancia_Recorrida integer not null,
    Dis_Par_Tiempo time not null,
    Dis_Par_Posicion integer not null,
    Dis_Par_FK_Ins_1 integer not null,
    Dis_Par_FK_Ins_2 integer not null,
    CONSTRAINT pk_distancia_par PRIMARY KEY(Dis_Par_ID),
    CONSTRAINT goza FOREIGN KEY(Dis_Par_FK_Ins_1, Dis_Par_FK_Ins_2) REFERENCES INSCRIPCION(Insc_FK_Carrera, Insc_FK_Ejemplar)
);

CREATE TABLE RETIRO(
    Reti_Fecha date not null,
    Reti_FK_Motivo_Retiro integer not null,
    Reti_FK_Inscripcion_1 integer not null,
    Reti_FK_Inscripcion_2 integer not null,
    CONSTRAINT pk_retiro PRIMARY KEY(Reti_FK_Motivo_Retiro, Reti_FK_Inscripcion_1, Reti_FK_Inscripcion_2),
    CONSTRAINT identifica FOREIGN KEY(Reti_FK_Motivo_Retiro) REFERENCES MOTIVO_RETIRO(Mot_Ret_ID),
    CONSTRAINT permite FOREIGN KEY(Reti_FK_Inscripcion_1, Reti_FK_Inscripcion_2) REFERENCES INSCRIPCION(Insc_FK_Carrera, Insc_FK_Ejemplar)
);

CREATE TABLE COMENTARIO(
    Come_ID serial,
    Come_Descripcion VARCHAR not null,
    Come_FK_Inscripcion_1 integer not null,
    Come_FK_Inscripcion_2 integer not null,
    CONSTRAINT pk_comentario PRIMARY KEY(Come_ID),
    CONSTRAINT cuenta FOREIGN KEY(Come_FK_Inscripcion_1, Come_FK_Inscripcion_2) REFERENCES INSCRIPCION(Insc_FK_Carrera, Insc_FK_Ejemplar)
);

CREATE TABLE RESULTADO(
    Resu_ID serial,
    Resu_Hora_Partida time not null,
    Resu_Tiempo_Carrera time not null,
    Resu_Posicion_Ejemplar integer not null,
    Resu_FK_Cuerpos integer not null,
    Resu_FK_Inscripcion_1 integer not null,
    Resu_FK_Inscripcion_2 integer not null,
    CONSTRAINT pk_resultado PRIMARY KEY(Resu_ID),
    CONSTRAINT especifica FOREIGN KEY(Resu_FK_Cuerpos) REFERENCES CUERPO_DIFERENCIA(Cue_Dif_ID),
    CONSTRAINT produce FOREIGN KEY(Resu_FK_Inscripcion_1, Resu_FK_Inscripcion_2) REFERENCES INSCRIPCION(Insc_FK_Carrera, Insc_FK_Ejemplar)
);

CREATE TABLE IMP_INS(
    Imp_Ins_Aprobacion VARCHAR not null,
    Imp_Ins_FK_Implemento integer not null,
    Imp_Ins_FK_Inscripcion_1 integer not null,
    Imp_Ins_FK_Inscripcion_2 integer not null,
    CONSTRAINT pk_imp_ins PRIMARY KEY(Imp_Ins_FK_Implemento, Imp_Ins_FK_Inscripcion_1, Imp_Ins_FK_Inscripcion_2),
    CONSTRAINT implementan FOREIGN KEY(Imp_Ins_FK_Implemento) REFERENCES IMPLEMENTO(Impl_ID),
    CONSTRAINT emplea FOREIGN KEY(Imp_Ins_FK_Inscripcion_1, Imp_Ins_FK_Inscripcion_2) REFERENCES INSCRIPCION(Insc_FK_Carrera, Insc_FK_Ejemplar),
    CONSTRAINT aprobacion_implemento CHECK(Imp_Ins_Aprobacion like 'Aprobado' or Imp_Ins_Aprobacion like 'Rechazado' or Imp_Ins_Aprobacion like 'En espera')
);

CREATE TABLE MED_INS(
    Med_Ins_Aprobacion VARCHAR not null,
    Med_Ins_FK_Medicamento integer not null,
    Med_Ins_FK_Inscripcion_1 integer not null,
    Med_Ins_FK_Inscripcion_2 integer not null,
    CONSTRAINT pk_med_ins PRIMARY KEY(Med_Ins_FK_Medicamento, Med_Ins_FK_Inscripcion_1, Med_Ins_FK_Inscripcion_2),
    CONSTRAINT usado FOREIGN KEY(Med_Ins_FK_Medicamento) REFERENCES MEDICAMENTO(Medi_ID),
    CONSTRAINT usa FOREIGN KEY(Med_Ins_FK_Inscripcion_1, Med_Ins_FK_Inscripcion_2) REFERENCES INSCRIPCION(Insc_FK_Carrera, Insc_FK_Ejemplar),
    CONSTRAINT aprobacion_medicamento CHECK(Med_Ins_Aprobacion like 'Aprobado' or Med_Ins_Aprobacion like 'Rechazo' or Med_Ins_Aprobacion like 'En espera')
);

CREATE TABLE DETALLE_APUESTA(
    Det_Apu_Posicion integer not null,
    Det_Apu_Orden numeric,
    Det_Apu_FK_Apuesta integer not null,
    Det_Apu_FK_Inscripcion_1 integer not null,
    Det_Apu_FK_Inscripcion_2 integer not null,
    CONSTRAINT pk_detalle_apuesta PRIMARY KEY(Det_Apu_FK_Apuesta, Det_Apu_FK_Inscripcion_1, Det_Apu_FK_Inscripcion_2),
    CONSTRAINT requieren FOREIGN KEY(Det_Apu_FK_Apuesta) REFERENCES APUESTA(Apue_ID),
    CONSTRAINT requisito FOREIGN KEY(Det_Apu_FK_Inscripcion_1, Det_Apu_FK_Inscripcion_2) REFERENCES INSCRIPCION(Insc_FK_Carrera, Insc_FK_Ejemplar)
);

CREATE TABLE SOLICITUD_JINETE(
    Sol_Jin_Aprobacion VARCHAR not null,
    Sol_Jin_Peso numeric not null,
    Sol_Jin_Fecha date not null,
    Sol_Jin_FK_Jinete integer not null,
    Sol_Jin_FK_Inscripcion_1 integer not null,
    Sol_Jin_FK_Inscripcion_2 integer not null,
    CONSTRAINT pk_solicitud_jinete PRIMARY KEY(Sol_Jin_FK_Jinete, Sol_Jin_FK_Inscripcion_1, Sol_Jin_FK_Inscripcion_2),
    CONSTRAINT solicita FOREIGN KEY(Sol_Jin_FK_Jinete) REFERENCES JINETE(Jine_Pers_ID),
    CONSTRAINT solicitado FOREIGN KEY(Sol_Jin_FK_Inscripcion_1, Sol_Jin_FK_Inscripcion_2) REFERENCES INSCRIPCION(Insc_FK_Carrera, Insc_FK_Ejemplar)
);