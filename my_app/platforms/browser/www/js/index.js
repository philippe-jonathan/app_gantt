$('#submit_btn').click(function(){
    var name = $('#name').val();
    var date = $('#date').val();
    var time = $('#time').val();
    var array = [];
    array.push(name, date, time);
    console.log(name, date, time);
});
$('.result').html(array);

//création de la base de données
//creation of the database
function create_db(tx) {
    tx.executeSql('CREATE TABLE User ( `id` int(11) NOT NULL, `name` text NOT NULL, `date` date NOT NULL, `time` time NOT NULL)'); 
}
//Configuration de la base de données
//Configuration of the database
var db = window.openDatabase('databse_cordova', '1.0', 'bdd_cordova', 1000000);
db.transaction(create_db);

//ajout des valeurs dans la base de données
//adding values ​​to the database
function insert(tx){
    tx.executeSql('INSERT INTO User (name, date, time) VALUES ("' + name + '", "'+ date + '", "'+ time + '")');
}
