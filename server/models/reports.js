function users(pg, func){
    pg.query("select usua_nombre Usuario, rol_nombre Rol from Usuario, Rol Where Usua_FK_Rol = Rol_ID", func);
};

function stud_1(pg, func){
    pg.query("Select Stud_Nombre Stud, Unif_Descripcion Uniforme, Unif_tipo Tipo From Stud, Uniforme    Where Stud_ID = Unif_FK_Stud order by stud_id", func);
};

function stud_2(pg, func){
    pg.query("Select Stud_Nombre Stud, (Prop_Pers_p_nombre || ' ' || Prop_Pers_p_apellido) Propietario, Stu_Pro_Porcentaje Porcentaje from Stud, Stu_Pro, Propietario Where Stud_ID = Stu_Pro_FK_Stud And Prop_Pers_ID = Stu_Pro_FK_Propietario", func);
};

function stud_3(pg, func){
    pg.query("Select Stud_Nombre Stud, Ejem_Nombre Ejemplar, (Prop_Pers_p_nombre || ' ' || Prop_Pers_p_apellido) Propietario from Stud, Propietario, Ejemplar, Eje_pro_stud Where Eje_pro_stud_FK_Stud = stud_id and eje_pro_stud_FK_ejemplar = ejem_ID and eje_pro_stud_FK_Propietario = prop_pers_ID", func);
};

function horses(pg, func){
    pg.query("select cast(extract(years from age(Ejem_Fecha_Nacimiento)) as Numeric) Edad, Ejem_Nombre Nombre, Ejem_Sexo Sexo, Ejem_Pelaje Pelaje from ejemplar order by edad, nombre asc", func);
};

function implements(pg, func){
    pg.query("select Impl_Nombre Nombre, Impl_Abreviacion Abreviacion from Implemento", func);
};

function trainers(pg, func){
    pg.query("select (Entr_Pers_P_Nombre || ' ' || Entr_Pers_P_Apellido) Entrenador, Caba_ID Cuadra from entrenador, caballeriza, cab_ent where Entr_Pers_ID = Cab_Ent_FK_Entrenador and Caba_ID = Cab_Ent_FK_Caballeriza and Cab_Ent_Fecha_Fin is null", func);
};

function jockey(pg, func){
    pg.query("Select (Jine_Pers_p_Nombre || ' ' ||  Jine_Pers_p_Apellido) Nombre from jinete", func);
};

function restaurants(pg, func){
    pg.query("select rest_nombre Nombre, hor_res_hora_apertura Abre, hor_res_hora_cierre Cierra from restaurante, horario_restaurante where rest_FK_Horario = hor_res_ID", func);
};

module.exports = {
    users,
    stud_1,
    stud_2,
    stud_3,
    horses,
    implements,
    trainers,
    jockey,
    restaurants
};