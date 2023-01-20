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

function winners(pg, func){
    pg.query("Select ejem_nombre Ejemplar from carrera, ejemplar, inscripcion, resultado, eje_ent, categoria_carrera where insc_fk_ejemplar = eje_ent_ID and insc_FK_carrera = carr_ID and eje_ent_fk_ejemplar = ejem_ID and resu_fk_inscripcion = insc_ID and resu_posicion_ejemplar = 1    and carr_FK_cat_car = cat_car_id and cat_car_nombre = 'Clásico'", func);
}

function winners_1(pg, func){
    pg.query("Select ejem_nombre Ejemplar, cat_car_nombre tipo from carrera, ejemplar, inscripcion, resultado, eje_ent, categoria_carrera where insc_fk_ejemplar = eje_ent_ID and insc_FK_carrera = carr_ID and eje_ent_fk_ejemplar = ejem_ID and resu_fk_inscripcion = insc_ID and resu_posicion_ejemplar = 1 and carr_FK_cat_car = cat_car_id order by tipo asc limit 15;", func);
};

function history(pg, name, func){
    pg.query(`select (Jine_pers_p_nombre || ' ' || Jine_pers_p_apellido) Jinete, Ejem_nombre ejemplar, carr_nombre carrera from inscripcion, carrera, eje_ent, ejemplar, resultado, jinete where insc_fk_carrera = carr_id and insc_fk_ejemplar = eje_ent_ID and eje_ent_fk_ejemplar = ejem_id and insc_fk_jinete = jine_pers_id and resu_fk_inscripcion = insc_ID and resu_posicion_ejemplar = 1 and jine_pers_p_nombre like '%${name}%'`, func)
}

function statJockey(pg, func){
    pg.query(`select (Jine_pers_p_nombre || ' ' || Jine_pers_p_apellido) Jinete, count(*) participaciones from inscripcion, jinete where insc_fk_jinete = jine_pers_ID group by (Jine_pers_p_nombre || ' ' || Jine_pers_p_apellido) order by 2 desc`, func)
};

function statHorse(pg, func){
    pg.query(`select ejem_nombre ejemplar, count(*) participaciones from inscripcion, eje_ent, ejemplar where insc_fk_ejemplar = eje_ent_id and eje_ent_fk_ejemplar = ejem_id group by ejem_nombre order by participaciones desc`, func);
}

function statMix(pg, func){
    pg.query(`	select ejem_nombre ejemplar, (Jine_pers_p_nombre || ' ' || Jine_pers_p_apellido) Jinete, (Entr_pers_p_nombre || ' ' || Entr_pers_p_apellido) entrenador, count(*) participaciones from inscripcion, eje_ent, ejemplar, jinete, entrenador where insc_fk_ejemplar = eje_ent_id and eje_ent_fk_ejemplar = ejem_id	and insc_fk_jinete = jine_pers_id and eje_ent_fk_entrenador = entr_pers_id group by ejem_nombre, jinete, entrenador	order by participaciones desc`, func)
}

function totalBet_1(pg, func){
    pg.query('select sum(apue_monto) total, taqu_nro taquilla from apuesta, taquilla where apue_FK_taquilla = taqu_id group by taqu_nro', func)
}

function totalBet_2(pg, func){
    pg.query('select sum(apue_monto) total, taqu_nro taquilla, tip_apu_nombre tipo from apuesta, taquilla, tipo_apuesta where apue_FK_taquilla = taqu_id and apue_fk_tipo_apuesta = tip_apu_id group by taqu_nro, tip_apu_nombre', func)
}

function totalBet_3(pg, func){
    pg.query('select sum(apue_monto) total, taqu_nro taquilla, tip_apu_nombre tipo, carr_nombre carrera from apuesta, taquilla, tipo_apuesta, detalle_apuesta, inscripcion, carrera where apue_FK_taquilla = taqu_id and apue_fk_tipo_apuesta = tip_apu_id and det_apu_fk_apuesta = apue_id and det_apu_fk_inscripcion = insc_id and insc_fk_carrera = carr_ID group by taqu_nro, tip_apu_nombre, carr_nombre', func)
}

function totalTicket(pg, func){
    pg.query('select sum(bole_valor) total from boleto', func)
}

function avgImp(pg, func){
    pg.query('select (cast(cast(count(*)as numeric(1,0))/(select count(*) from inscripcion, imp_ins, implemento where insc_id = imp_ins_fk_inscripcion and impl_id = imp_ins_fk_implemento and insc_fk_carrera in (select carr_ID from carrera order by carr_fecha_hora desc limit 25)) as numeric(1,1))*100) promedio, impl_nombre implemento from inscripcion, imp_ins, implemento where insc_id = imp_ins_fk_inscripcion and impl_id = imp_ins_fk_implemento and insc_fk_carrera in (select carr_ID from carrera order by carr_fecha_hora desc limit 25) group by impl_nombre', func);
}

function avgImp_1(pg, func){
    pg.query('select cast(cast(count(*)as numeric(1,0))/(select count(*) from inscripcion, imp_ins, implemento where insc_id = imp_ins_fk_inscripcion and impl_id = imp_ins_fk_implemento) as numeric(1,1)) porcentaje, impl_nombre implemento from inscripcion, imp_ins, implemento where insc_id = imp_ins_fk_inscripcion and impl_id = imp_ins_fk_implemento group by impl_nombre order by porcentaje desc', func);
}

function frequency(pg, func){
    pg.query('select count(*) frecuencia, cat_car_nombre tipo from categoria_carrera, carrera where carr_fk_cat_car = cat_car_id group by cat_car_nombre order by 1 desc limit 1', func);
}

function weight(pg, func){
    pg.query('select avg(jine_peso), carr_nombre from jinete, carrera, inscripcion where jine_pers_id = insc_fk_jinete and insc_fk_carrera = carr_ID and insc_fk_carrera in (select carr_ID from carrera order by carr_fecha_hora desc limit 25) group by carr_nombre', func)
}

function avgHorse_1(pg, func){
    pg.query('select (cast(cast(count(*)as numeric(2,0))/(select count(*) from inscripcion, eje_ent, ejemplar where insc_fk_ejemplar = eje_ent_id and eje_ent_fk_ejemplar = ejem_id and insc_fk_carrera in (select carr_ID from carrera order by carr_fecha_hora desc limit 50)) as numeric(2,1))*100) promedio, ejem_pelaje pelaje from inscripcion, eje_ent, ejemplar where insc_fk_ejemplar = eje_ent_id and eje_ent_fk_ejemplar = ejem_id and insc_fk_carrera in (select carr_ID from carrera order by carr_fecha_hora desc limit 50) group by ejem_pelaje', func)
}

function avgHorse_2(pg, func){
    pg.query('select (cast(cast(count(*)as numeric(2,0))/(select count(*) from inscripcion, eje_ent, ejemplar where insc_fk_ejemplar = eje_ent_id and eje_ent_fk_ejemplar = ejem_id and insc_fk_carrera in (select carr_ID from carrera order by carr_fecha_hora desc limit 50)) as numeric(2,1))*100) promedio, ejem_sexo sexo from inscripcion, eje_ent, ejemplar where insc_fk_ejemplar = eje_ent_id    and eje_ent_fk_ejemplar = ejem_id and insc_fk_carrera in (select carr_ID from carrera order by carr_fecha_hora desc limit 50) group by ejem_sexo', func)
}

function parents(pg, func){
    pg.query('select ejem_nombre ejemplar, ejem_sexo sexo, (select count(*) from ejemplar e, resultado, eje_ent, inscripcion where e.ejem_id = eje_ent_FK_ejemplar and eje_ent_ID = insc_fk_ejemplar and insc_ID = resu_fk_inscripcion and resu_posicion_ejemplar = 1 and (e.ejem_fk_madre = e1.ejem_Id or e.ejem_fk_padre = e1.ejem_id)) hijos from ejemplar e1 order by hijos desc    ', func)
}

module.exports = {
    users,
    stud_1,
    stud_2,
    stud_3,
    horses,
    implements,
    trainers,
    jockey,
    restaurants,
    winners,
    winners_1,
    history,
    statJockey,
    statHorse,
    statMix,
    totalBet_1,
    totalBet_2,
    totalBet_3,
    totalTicket,
    avgImp,
    avgImp_1,
    frequency,
    weight, 
    avgHorse_1,
    avgHorse_2,
    parents
};