function users(pg, func){
    pg.query("select usua_nombre Usuario, rol_nombre Rol from Usuario, Rol Where Usua_FK_Rol = Rol_ID", func);
};

function stud_1(pg, func){
    pg.query("", func);
};

function stud_2(pg, func){
    pg.query("", func);
};

function stud_3(pg, func){
    pg.query("", func);
};

function horses(pg, func){
    pg.query("select cast(extract(years from age(Ejem_Fecha_Nacimiento)) as Numeric) Edad, Ejem_Nombre Nombre, Ejem_Sexo Sexo, Ejem_Pelaje Pelaje from ejemplar order by edad, nombre asc", func);
};

function implements(pg, func){
    pg.query("select Impl_Nombre Nombre, Impl_Abreviacion Abreviacion from Implemento", func);
};

function trainers(pg, func){
    pg.query("", func);
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