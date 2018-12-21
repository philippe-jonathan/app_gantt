//création de la base de données.
//creation of the database.
function create_db(tx) {
    tx.executeSql('CREATE TABLE task ( `id` int(11) NOT NULL, `name` text NOT NULL, `date` date NOT NULL, `time` time NOT NULL)'); 
}

//Configuration de la base de données.
//Configuration of the database.
var db = window.openDatabase('databse_cordova', '1.0', 'bdd_cordova', 1000000);
db.transaction(create_db);

//fonction qui sert à ajouter des valeurs dans la base de données.
function insert(tx){
    tx.executeSql('INSERT INTO task (id, name, date, time) VALUES (' + 1 + ', "' + name + '", "'+ date + '", "'+ time + '")');
}

//On affiche toutes les données entrées précédemment dans la base de données.
db.transaction(dispAll);

//initialisation des variable correspondantes au input plus l'id = 0.
var name;
var date;
var time;
var id = 0;

//au click du boutton on récupère les valeurs des input et on séléctionne toutes les valeurs de la table.
$('#submit_btn').click(function(){
    name = $('#name').val();
    date = $('#date').val();
    time = $('#time').val();

    db.transaction(selectAll);
});

//fonction qui sert a afficher.
function dispAll(tx)
{
    //on récupère toutes les valeurs de la base de données.
    tx.executeSql('SELECT * FROM task;', [], function(tx, result){
        task = result.rows;
        console.log(task);
        for (i = 0; i<task.length; i++) {
            
            //et on affichage le tout dans la div "class=result".
            $(".result").append(
                "<div id='tasks_infos' class='text-center'>"
                    + task[i].id + " " 
                    + task[i].name + " "
                    + task[i].date + " "
                    + task[i].time 
                + "</div>")
        }
    })
};


//fonction qui sert à séléctionner toutes les valeurs de la base de données.
function selectAll(tx)
{
    //on récupère toutes les valeurs de la base de données.
    tx.executeSql('SELECT * FROM task;', [], function(tx, result){
        task = result.rows;
        for( i = 0; i<task.length;i++){
            id = i;
        }
        console.log(task);
        //on utilise la fonction insert en même temps que la fonction selectAll pour envoyer les données dans la table.
        db.transaction(insert);
      })

};
