$(function () {


    ($('<div/>', { id: "controles" })

        //Controles de columna

        .append($('<br/>'))

        .append($('<label/>', { for: "col" }).text("NºCol.:"))
        .append($('<input/>', { id: "col", type: "number", min: 0, step: 1, value: 0 }))
        .append($('<button/> ', { id: "col_add", type: "button" }).text("+"))
        .append($('<button/> ', { id: "col_del", type: "button" }).text("-"))
        .append($('<button/> ', { id: "col_left", type: "button" }).text("<"))
        .append($('<button/> ', { id: "col_right", type: "button" }).text(">"))

    ).insertAfter($("#tabla"))
    //AÑADIR COLUMNA

    $("#col_add").on("click", function () {


        $("#tabla tr").each(function (index) {
            let $celda = (index == 0) ? $("<th/>").text("X") : $("<td/>").text("-")
            $celda.insertAfter($(this).children().eq($("#col").val()))
        })
    })

    //QUITAR COLUMNA
    $("#col_del").on("click", function () {


        $("#tabla tr").each(function () {



            $(this).children().eq($("#col").val()).remove()
        })

    })

    //MOVER COLUMNA A LA IZQUIERDA


    $("#col_left").on("click", function () {

        let pos = +$("#col").val();

        if (pos > 0) {
            $("#tabla tr").each(function () {
                $(this).children().eq(pos).after($(this).children().eq(pos - 1));
            })

            $("#col").val(pos - 1)
        }
    });
    //MOVER COLUMNA A LA DERECHA
    $("#col_right").on("click", function () {

        let pos = +$("#col").val();


        $("#tabla tr").each(function () {
            $(this).children().eq(pos).before($(this).children().eq(pos + 1));
        })

        $("#col").val(pos + 1)

    });


    // FILAS PARA CASA --> AÑADIR ELIMINAR SUBIR Y BAJAR



    //EDITAR CELDA

    $("#tabla").on("dblclick", 'td ,th', function () {

        let $input = $("<input/>", {
            type: "text",
            value: $(this).text()
        })

        $input.data("original", $(this).text());
        $(this).text("");
        $(this).append($input);
        $input.select();

    })





        .on("blur", "input", function () {
            $(this).parent().text($(this).data("original"));
            $(this).remove();
        })


        .on("keyup", "input", function (e) {

            if (e.keyCode == 13) {
                $(this).parent().text($(this).val());
                $(this).remove();
            }
        })























});