import Navbarunive from "./Navbarunive";

function AccessoremotoaDBMySQL(){

    return(

        <>
        
        <Navbarunive></Navbarunive>

<div className=" ml-[-65px] border-2 border-transparent w-[270px] h-[50px] xl:w-[650px] xl:h-[100px] mt-[160px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[350px] md:ml-[-200px] ">
<h1 className=" text-[44px] mt-[-20px] xl:text-[72px] text-left md:text-[55px]">Accesso remoto a DB MySQL</h1>
</div>


<div className=" border-2 border-black w-[300px] h-[2100px] xl:w-[650px] xl:h-[1990px] mt-44 ml-[-65px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:h-[4250px]  md:mt-[200px]">
<p className=" text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]">Salve a tutti oggi vedremo come creare un accesso remoto al DB, e successivamente gestirlo con uno script in Python.
<br />
<br />
Per accedere al DB residente nel RaspBerry da un dispositivo remoto è necessario creare un accesso che sia diverso
da localhost e successivamente dargli tutti i privilegi per poterlo gestire:
<br />
<br />
pi@raspberrypi: cd /var/www/html
<br />
<br />
pi@raspberrypi: sudo mysql -u root -p
<br />
<br />
Enter password: inserire la vostra password di root.
Se tutto è andato a buon fine apparirà quanto segue:
<br />
<br />
Welcome to the MariaDB monitor. Commands end with ; or \g.
Your MariaDB connection id is 26
Server version: 10.5.15-MariaDB-0+deb11u1 Raspbian 11
<br />
<br />
Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.
<br />
<br />
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
<br />
<br />
Ora con dei semplici comandi andremo a creare un nuovo utente con tutti i privilegi:
<br />
<br />
MariaDB [(none)] CREATE USER 'nuovo user'@'%' IDENTIFIED BY 'nuova password';
<br />
<br />
Query OK, 0 rows affected (0.008 sec)
<br />
<br />
MariaDB [(none)] GRANT ALL PRIVILEGES ON *.* TO 'nuovo user'@'%' WITH GRANT OPTIO
N;
Query OK, 0 rows affected (0.003 sec)
<br />
<br />
MariaDB [(none)] exit
Bye
<br />
<br />
Il nuovo user è stato creato e avrà accesso al DB da remoto perchè al posto di localhost abbiamo inserito il carattere
speciale '%' cioè da qualsiasi indirizzo ip; possiamo anche decidere un singolo indirizzo ip o tutti gli ip della
nostra rete domestica semplicemente inserendo '192.168.1.%'.
<br />
<br />
E' possibile controllare e modificare i privilegi dei singoli Account utenti anche da phpMyAdmin:
<br />
<br />
Da phpMyAdmin è tuttavia possibile creare un nuovo Account user in modo intuitivo evitando di seguire la
procedura descritta sopra, selezionando i privilegi che riteniamo più opportuni.</p>
</div>

<div className=" w-[300px] h-[160px] ml-[-65px] mt-12 border-2 border-transparent xl:ml-[-100px] xl:w-[480px] min-[375px]:ml-[-50px] md:w-[350px] md:ml-[-200px]">
<img src="Cattura6.png" alt="" />
</div>

<div className=" border-2 border-black w-[300px] h-[200px] xl:w-[650px] xl:h-[180px] mt-44 ml-[-65px] xl:ml-[300px] xl:mt-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:h-[450px]  md:mt-[200px]">
<p className=" text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]">Da phpMyAdmin è tuttavia possibile creare un nuovo Account user in modo intuitivo evitando di 
seguire la procedura descritta sopra, selezionando i privilegi che riteniamo più opportuni.</p>
</div>

<div className=" w-[300px] h-[100px] ml-[-65px] mt-12 border-2 border-transparent xl:ml-[300px] min-[375px]:ml-[-50px] md:w-[350px] md:ml-[-200px]">
<img src="creare-1666464546829.jpg" alt="" />
</div>

<div className=" border-2 border-black k w-[300px] h-[450px] xl:w-[650px] xl:h-[450px] mt-44 ml-[-65px] xl:ml-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:h-[890px]  md:mt-[200px]">
<p className=" text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]">Qui sotto ho inserito un semplice script in python che utilizza la libreria mysql connector 
(da scaricare con pip install mysql-connector-python).
<br />
<br />
Lo script fa una cosa semplicissima ma sintetizza in poche linee di codice l'accesso al DB che risiede nel RaspBerry e visualizza 
tutte le tabelle che sono al suo interno; approfondendo l'argomento è possibile creare e cancellare tabelle, inserire dati nelle tabelle e quant'altro.</p>
</div>

<div className=" w-[300px] h-[520px] border-[4px] border-black bg-slate-700 mt-10 ml-[-65px] rounded-[80px] xl:rounded-[100px] xl:ml-[300px] xl:w-[480px] xl:h-[750px] min-[375px]:ml-[-50px] md:w-[400px]  md:h-[550px] md:ml-[-200px]">
    <h5 className="text-left text-[10px] xl:pt-[70px] ml-7 pt-5 md:text-[11px] xl:ml-9 xl:text-[13px]">import mysql.connector
    <br />
    <br />
from mysql.connector import MySQLConnection, Error
<br />
<br />
def connect():
<br />
    conn = None
    <br />
    try:
<br />
<br />
        conn = mysql.connector.connect(
            <br />
            host='192.168.x.x',
            <br />
            # database='MIO_DB',
            <br />
            user='username',
            <br />
            password='password',
            <br />
            port=3306
            <br />
        )
        <br />
        if conn.is_connected():
        <br />
            print('Connected to MySQL database')
            <br />
            cursor = conn.cursor()
            <br />
            cursor.execute("SHOW DATABASES")
            <br />
            for x in cursor:
            <br />
                print(x)
                <br />
    except Error as e:
    <br />
        print(e)
        <br />
    finally:
    <br />
        if conn is not None and conn.is_connected():
        <br />
            print('Connection closed')
            <br />
            conn.close()
            <br />
            <br />

if __name__ == '__main__':
    connect()</h5></div>

<footer className=" w-[100%] h-24  left-0 mt-[200px] absolute bg-[#1b4455] z-40">
<h6 className=" min-[1400px]:ml-[-1410px] scale-90 mt-[36px] ml-[-110px] xl:ml-[-900px] xl:text-lg md:ml-[-400px] md:text-[19px]">Copyright © 2023 MimmoSoftweb</h6>
</footer>


        </>

    );

};

export default AccessoremotoaDBMySQL;