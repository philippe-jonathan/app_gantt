
//création de la base de données.
//creation of the database.
function create_db(tx) {
    tx.executeSql('CREATE TABLE task ( `id` int(11) NOT NULL, `name` text NOT NULL, `date` date NOT NULL, `time` time NOT NULL)'); 
}
//Configuration de la base de données.
//Configuration of the database.
var db = window.openDatabase('databse_cordova', '1.0', 'bdd_cordova', 1000000);
db.transaction(create_db);

//ajout des valeurs dans la base de données.
//adding values ​​to the database.
function insert(tx){
    tx.executeSql('INSERT INTO task (id, name, date, time) VALUES (' + 1 + ', "' + name + '", "'+ date + '", "'+ time + '")');
}

//initialisation des variable correspondantes au input.
var name;
var date;
var time;

//au click du boutton on envoie les valeurs des inputs dans la base de données et on les récupères.
//at the click of the button the values of the inputs are sent to the database and displayed.
$('#submit_btn').click(function(){
    name = $('#name').val();
    date = $('#date').val();
    time = $('#time').val();

    db.transaction(selectAll);
});

//fonction qui sert a afficher.
function dispAll(tx)
{
    tx.executeSql('SELECT * FROM task;', [], function(tx, result){
        task = result.rows;
        console.log(task);
        for (i=0; i<task.length; i++) {
            
            $(".result").append("<tr>"+
            "<th scope='col'>" + 1 + "</th>"+
            "<td scope='col'>" + task[i].name + "</td>"+
            "<td scope='col'>" + task[i].date + "</td>"+
            "<td scope='col'>" + task[i].time + "</td></tr>")
            
        }
    })

};

//On affiche toutes les données de la base de données.
db.transaction(dispAll);

//fonction qui sert à selctionner toutes les valeurs de la base de données.
function selectAll(tx)
{
    tx.executeSql('SELECT * FROM task;', [], function(tx, result){
        task = result.rows;
        console.log(task);
        db.transaction(insert);
      })

};
