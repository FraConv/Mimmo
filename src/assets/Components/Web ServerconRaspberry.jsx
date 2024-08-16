import Footeruniv from "./Footeruniv";
import Navbarunive from "./Navbarunive";

function WebServerconRaspberry(){

    return(

        <>
        
        <Navbarunive></Navbarunive>

<div className=" ml-[-65px] border-2 border-transparent w-[270px] h-[50px] xl:w-[650px] xl:h-[100px] mt-[160px] xl:ml-[-100px]  min-[375px]:ml-[-50px] md:w-[350px] md:ml-[-200px] ">
<h1 className="text-[white] text-[44px] mt-[-20px] xl:text-[72px] text-left md:text-[55px]">Web Server con Raspberry</h1>
</div>

<div className=" w-[230px] xl:w-[480px] h-[160px] ml-[-65px] mt-40 border-2 border-transparent xl:ml-[-120px] min-[375px]:ml-[-60px]  md:w-[390px] md:ml-[-210px]">
<img src="f61IY5mYh8tL._SL1000_.jpg" alt="" />
</div>

<div className=" ml-[-65px] border-2 border-transparent w-[270px] h-[50px] xl:w-[650px] xl:h-[100px] mt-[72px] xl:ml-[-100px] xl:mt-[260px] min-[375px]:ml-[-50px]  md:mt-[150px]  md:w-[390px] md:ml-[-200px]">
<h3 className="text-[white] md:text-[40px] text-[30px] mt-[80px] xl:text-[47px] text-left">Di cosa hai bisogno</h3>
</div>

<div className=" border-2 border-transparent w-[300px] h-[100px] xl:w-[650px] xl:h-[130px] mt-[180px] ml-[-65px] xl:ml-[-100px] xl:mt-[160px] min-[375px]:ml-[-50px]  md:w-[390px] md:ml-[-200px]">
<p className="text-[white] md:text-[27px] text-[16px] mt-[-8px] xl:text-[25px] text-left">Raspberry PI zero 2
    <br />
Alimentatore 5V per Raspberry (2A)
<br />
Micro SD (16 GB) (2A)</p>
</div>

<div className=" ml-[-65px] border-2 border-transparent w-[270px] h-[50px] xl:w-[650px] xl:h-[100px] mt-[12px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<h3 className="text-[white] md:text-[40px] text-[30px] mt-[80px] xl:text-[47px] text-left">OS Lite</h3>
</div>

<div className=" border-2 border-transparent w-[300px] h-[200px] xl:w-[650px] xl:h-[200px] mt-28 ml-[-65px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:h-[460px]">
<p className="text-[white]  md:text-[27px] text-[16px] mt-[-8px] xl:text-[25px] text-left">Dopo aver installato l'OS Lite sulla micro SD, è necessario impostare il Raspberry con indirizzo IP statico e quello del gateway
che corrisponde all'indirizzo del modem, ciò ci permetterà di accedere dall'esterno;</p>
</div>

<div className=" border-2 border-transparent w-[300px] h-[120px] xl:w-[650px] xl:h-[130px] mt-5 ml-[-65px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:h-[280px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]"> tali configurazioni, devono essere fatte nel file
dhcpcd.conf che si trova nella directory etc editando il seguente comando:
</p>
</div>

<div className=" w-[300px] h-[50px] border-[4px] border-transparent bg-slate-700 mt-10 ml-[-65px] rounded-2xl xl:ml-[-100px] xl:mt-[120px] xl:w-[480px] xl:h-[50px] xl:rounded-[20px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<h5 className="text-[white] text-left ml-3 xl:pt-[10px] md:pt-[10px] text-[10px] pt-[10px] xl:text-[17px] md:text-[13px]">
pi@raspberrypi:~ $ sudo nano /etc/dhcpcd.conf</h5></div>

<div className=" border-2 border-transparent w-[300px] h-[420px] xl:w-[650px] xl:h-[620px] mt-16 ml-[-65px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:h-[920px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]"> Scorrere lo script ed eliminare i commenti sulle righe che riguardano l'indirizzo IP statico:
<br />
<br />
pi@raspberrypi: static ip_address=192.xxx.xxx.xxx (indirizzo IP che desiderate associare al Raspberry)
<br />
<br />
pi@raspberrypi: static routers=192.xxx.xxx.xxx (indirizzo IP del modem)
<br />
<br />
pi@raspberrypi: static domain_name_servers=192.xxx.xxx.xxx (indirizzo IP del modem, uguale allo static routers)
</p>
</div>

<div className=" w-[310px] h-[145px] border-[4px] border-transparent bg-slate-700 mt-10 ml-[-65px] rounded-[30px] xl:ml-[-100px] xl:mt-[120px] xl:w-[480px] xl:h-[210px] xl:rounded-[50px] min-[375px]:ml-[-50px] md:w-[390px] md:h-[250px] md:ml-[-200px]">
<h5 className="text-[white] text-left ml-5 xl:pt-2 xl:ml-8 md:pt-[15px] text-[10px] pt-[10px] xl:text-[17px] md:text-[17px]">
# Example static IP configuration:
#interface eth0
<br />
static ip_address=192.168.x.x/24
<br />
#static ip6_address=fd51:42f8:caae
<br />
:d92e::ff/64
<br />
static routers=192.168.x.x
<br />
static domain_name_servers=192.168.x.x</h5></div>

<div className=" border-2 border-transparent w-[300px] h-[540px] xl:w-[650px] xl:h-[590px] mt-16 ml-[-65px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:h-[1125px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]"> Fatto questo, salvate e riavviate il Raspberry con il comando:
<br />
<br />
pi@raspberrypi: sudo reboot
<br />
<br />
A questo punto, prima di procedere con l'installazione di Apache, dell'interprete PHP e del MySQL, assicuriamoci
di aggiornare del sistema con i soliti comandi:
<br />
<br />
pi@raspberrypi: sudo apt update
<br />
<br />
pi@raspberrypi: sudo apt upgrade
<br />
<br />
Attendere che il tutto venga aggiornato; ci potrebbe impiegare alcuni minuti.
</p>
</div>

<div className=" ml-[-65px] border-2 border-transparent w-[270px] h-[50px] xl:w-[430px] xl:h-[100px] mt-[32px] xl:ml-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<h3 className="text-[white] text-[30px] mt-[80px] xl:text-[47px] text-left md:text-[40px]">Installazione Apache</h3>
</div>

<div className=" border-2 border-transparent w-[300px] h-[880px] xl:w-[660px] xl:h-[930px] mt-40 ml-[-65px] xl:ml-[300px] xl:mt-[200px] min-[375px]:ml-[-50px]  md:w-[390px] md:ml-[-200px] md:h-[1700px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]"> Molto semplicemente per installare l'Apache, dare il comando seguente:
<br />
<br />
pi@raspberrypi: sudo apt install apache2
<br />
<br />
Il pacchetto Apache, ci serve per trasformare il nostro dispositivo Raspberry in un web server al fine di poter
realizzare pagine web e di gestire le richieste che provengono dagli utenti.
<br />
<br />
Dopo l'istallazione, abilitiamo Apache con i seguenti comandi:
<br />
<br />
pi@raspberrypi: sudo chown -R pi:www-data var/www/html
<br />
<br />
pi@raspberrypi: sudo chmod -R 770 /var/www/html
<br />
<br />
All'interno della directory /var/www/html, verranno inserite le nostre pagine web a cui accederemo o da rete locale o dall'esterno.
<br />
<br />
Controlleremo se il tutto funziona dopo aver installato l'interprete PHP.
</p>
</div>

<div className=" ml-[-65px] border-2 border-transparent w-[270px] h-[50px] xl:w-[430px] xl:h-[100px] mt-[32px] xl:ml-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<h3 className="text-[white] text-[30px] mt-[80px] xl:text-[47px] text-left md:text-[40px]">Installazione PHP</h3>
</div>

<div className=" border-2 border-transparent w-[300px] h-[550px] xl:w-[650px] xl:h-[600px] mt-40 ml-[-65px] xl:ml-[300px] xl:mt-[200px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:h-[1000px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]"> Per installare il PHP digitiamo il seguente comando:
<br />
<br />
pi@raspberrypi: sudo apt install php php-mbstring
<br />
<br />
A questo punto possimo verificare se il tutto funziona creando uno script php e lo chiameremo index.php,
quindi cancelleremo il file index.html presente nel percorso /var/www/html e lo sostituiremo con index.php:
<br />
<br />
pi@raspberrypi: sudo nano index.php
<br />
<br />
all'interno del file inseriamo:
</p>
</div>

<div className=" w-[230px] xl:w-[480px] h-[160px] ml-[-65px] mt-12 border-2 border-transparent xl:ml-[300px] min-[375px]:ml-[-50px]  md:w-[390px] md:ml-[-200px]">
<img src="php.svg" alt="" />
</div>

<div className=" border-2 border-transparent w-[300px] h-[50px] xl:w-[650px] xl:h-[80px] mt-16 ml-[-65px] xl:ml-[300px] xl:mt-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:mt-[200px] md:h-[100px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]"> Salvare il tutto con "Ctrl + X", confermiamo con "Y" + "Invio".
</p>
</div>

<div className=" ml-[-65px] border-2 border-transparent w-[270px] h-[50px] xl:w-[590px] xl:h-[100px] mt-[32px] xl:ml-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<h3 className="text-[white] text-[30px] mt-[80px] xl:text-[47px] text-left md:text-[40px]">Verifica del funzionamento</h3>
</div>

<div className=" border-2 border-transparent w-[300px] h-[550px] xl:w-[650px] xl:h-[600px] mt-40 ml-[-65px] xl:ml-[300px] xl:mt-[200px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:mt-[200px] md:h-[1060px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left  md:text-[27px]"> Ora possiamo verificare che tutto il lavoro fatto fino ad ora sia andato a buon fine. 
<br />
<br />
Per fare cio' basta semplicemente aprire un browser
da un PC collegato alla stessa rete wifi dov'è collegato lo stesso Raspberry, quello che state usando con il Putty va benissimo.
<br />
<br />
digitate
l'IP del Rasp nella riga degli indirizzi del browser e se tutto funziona dovrebbe apparire a schemo la stringa
My Server che ci restituisce il comando echo inserito nel file index.php che abbiamo appena fatto.
</p>
</div>
 
<div className=" w-[300px] xl:w-[480px] h-[160px] ml-[-65px] mt-12 border-2 border-transparent xl:ml-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<img src="My.png" alt="" />
</div>

<div className=" ml-[-65px] border-2 border-transparent w-[270px] h-[50px] xl:w-[590px] xl:h-[100px] mt-[32px] xl:ml-[-100px] xl:mt-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<h3 className="text-[white] text-[30px] mt-[80px] xl:text-[47px] text-left md:text-[40px]">Installazione di MySQL</h3>
</div>

<div className=" border-2 border-transparent w-[300px] h-[1900px] xl:w-[650px] xl:h-[2130px] mt-40 ml-[-65px] xl:ml-[-100px] xl:mt-[200px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:mt-[200px] md:h-[3790px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]"> Eseguiamo il seguente comando:
<br />
<br />
pi@raspberrypi: sudo apt install mariadb-server php-mysql
<br />
<br />
A questo punto ci collegheremo al mysql per creare un nuovo utente root con una nostra password al fine
di rendere il database disponibile dai futuri nostri scripts php:
<br />
<br />
pi@raspberrypi: sudo mysql --user=root
<br />
<br />
Stabilita la connessione con MySQL, è necessario digitare le seguenti righe di comando per creare il nuovo utente root
cambiando la password con quella desiderata:
<br />
<br />
DROP USER 'root'@'localhost';
<br />
<br />
CREATE USER 'root'@'localhost' IDENTIFIED BY 'vostra password';
<br />
<br />
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;
<br />
<br />
Fatto questo uscire con il comando exit
<br />
<br />
N.B. In questo modo, possiamo avere accesso al DB solo in locale, cioè possiamo creare, cancellare, modificare
tabelle del DB e quant'altro solo se il programma che lo gestisce gira sullo stesso dispositivo in cui è presente il DB,
nel nostro caso il RaspBerry. 
<br />
<br />
Per questo si utilizza il linguaggio PHP perchè esegue le istruzioni in locale anche se richieste dall'esterno.
<br />
<br />
Tuttavia è possibile gestire il DB dall'esteno senza richiamare script in php che risiedono nel dispositivo stesso, creando
un altro accesso diverso da 'root'@'localhost' che possiamo chiamare come vogliamo purchè al posto di localhost inseriamo '%';
spiegerò meglio quanto descritto nella sezione di Python nel argomento su "Accesso remoto a DB MySQL".
<br />
<br />
Ora per poter gestire il data base in maniera pratica e non da linee di comando, installeremo il PHPMyAdmin
al fine di realizzare le vostre tabelle in maniera visuale.
</p>
</div>

<div className=" ml-[-65px] border-2 border-transparent w-[270px] h-[50px] xl:w-[620px] xl:h-[100px] mt-[32px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<h3 className="text-[white] text-[30px] mt-[80px] xl:text-[47px] text-left md:text-[40px]">Installazione di PHPMyAdmin</h3>
</div>

<div className=" border-2 border-transparent w-[300px] h-[680px] xl:w-[650px] xl:h-[730px] mt-40 ml-[-65px] xl:ml-[-100px] xl:mt-[200px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:mt-[200px] md:h-[1230px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]"> 
Digitiamo il seguente comando per l'installazione di PHPMyAdmin:
<br />
<br />
pi@raspberrypi: sudo apt install phpmyadmin
<br />
<br />
Ora sposteremo la directory phpmyadmin sotto la dir /var/www/html con il seguente comando:
<br />
<br />
pi@raspberrypi: sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
<br />
<br />
Ora proviamo se tutto è andato a buon fine, digitando nel browser l'IP del RaspBerry + "/phpmyadmin"
<br />
<br />
Se abbiamo eseguito tutto correttamente dovrebbe apparire l'immagine seguente:
</p>
</div>

<div className=" w-[300px] xl:w-[480px] h-[340px] ml-[-65px] mt-12 border-2 border-transparent xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<img src="mysqljpg.jpg" alt="" />
</div>

<div className=" border-2 border-transparent w-[300px] h-[130px] xl:w-[650px] xl:h-[130px] mt-28 ml-[-65px] xl:mt-[300px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:mt-[200px] md:h-[160px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[25px] text-left md:text-[27px]"> 
Inserire utente e password (root e Vosta Password) per poter accedere alla pagina di gestione del data base MySQL:
</p>
</div>

<div className=" w-[300px] h-[230px] xl:w-[480px] ml-[-65px] mt-12 border-2 border-transparent xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<img src="Cattura 5.png" alt="" />
</div>

<div className=" border-2 border-transparent w-[300px] h-[1530px] xl:w-[650px] xl:h-[2690px] mt-40 ml-[-65px] xl:mt-[300px] xl:ml-[-100px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:mt-[200px] md:h-[3200px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[32px] text-left md:text-[27px]"> 
Bene, ora siete in  possesso di un Web server completo di data base sul vostro Raspberry pi zero 2; potete utilizzare php, 
html, e python per realizzare pagine web al fine di interagire con dispositivi WiFi IoT di Vostra realizzazione ad esempio con il noto ESP8266 o ESP32.
<br />
<br />
Ma questo è sufficente a gestire il tutto su una rete locale wifi, per gestire il nostro Web server dall'esteno, 
è necessario conoscere l'indirizzo IP pubblico del Vostro modem.
<br />
<br />
l'indirizzo non è detto che rimanga lo stesso a tempo indeterminato anzi viene modificato dal gestore della linea telefonica o ad ogni riavvio del modem a causa di blackout sulla rete elettrica.
<br />
<br />
Per ovviare a questo inconveniente, avete due possibilità:

- Richiedere un indirizzo IP statico al Vostro gestore, ciò però comporterà un incremento di prezzo

- Utilizzare un host DDNS che reindirizza il Vostro nome host all'IP dinamico a Voi associato in quel momento (es. NO-IP  oppure DynDDNS)
<br />
<br />
Però portebbe esserci una terza soluzione molto più semplice; se siete fortunati, molto probabilmente siete in possesso di un Modem 
che mette a disposizione un server al fine di gestire l'accesso da remoto esteno per poter modificare le impostazioni dello stesso.
<br />
<br />
Molte marche di Modem presenti sul mercato mettono a disposizione gratuitamente questo servizio pervio registrazione del prodotto, io posseggo un Fritz Box 7530.
<br />
<br />
Di seguito potete osservare li raspberry presente nella rete wifi locale:
</p>
</div>

<div className=" w-[300px] h-[130px] ml-[-65px] mt-12 border-2 border-transparent xl:ml-[-100px] xl:w-[480px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<img src="Cattura 4.png" alt="" />
</div>

<div className=" border-2 border-transparent w-[300px] h-[200px] xl:w-[650px] xl:h-[300px] mt-40 ml-[-65px] xl:mt-[300px] xl:ml-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:mt-[200px] md:h-[230px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[32px] text-left md:text-[27px]"> 
Se avete registrato il prodotto, nel menù Internet -
Abilitazioni nella scheda Servizi Fritz!Box, trovate l'host name per poter accedere dall'esterno, di solito è un codice con una serie di lettere.myfritz.net :
</p>
</div>

<div className=" w-[300px] h-[260px] ml-[-65px] mt-12 border-2 border-transparent xl:ml-[300px] xl:w-[480px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<img src="Cattura 3.png" alt="" />
</div>

<div className=" border-2 border-transparent w-[300px] h-[150px] xl:w-[650px] xl:h-[230px] mt-40 ml-[-65px] xl:mt-[300px] xl:ml-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:mt-[200px] md:h-[230px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[32px] text-left md:text-[27px]"> 
Ora un'altro piccolo passaggio e saremo pronti; nella scheda  Abilitazioni porte, dobbiamo inserire l'indirizzo IP del Raspberry, come di seguito:
</p>
</div>

<div className=" w-[300px] h-[260px] ml-[-65px] mt-12 border-2 border-transparent xl:ml-[300px] xl:w-[480px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px]">
<img src="Cattura 2.png" alt="" />
</div>

<div className=" border-2 border-transparent w-[300px] h-[350px] xl:w-[650px] xl:h-[700px] mt-40 ml-[-65px] xl:mt-[300px] xl:ml-[300px] min-[375px]:ml-[-50px] md:w-[390px] md:ml-[-200px] md:mt-[200px] md:h-[830px]">
<p className="text-[white] text-[16px] mt-[-8px] xl:text-[32px] text-left md:text-[27px]"> 
A questo punto se digitate l'host fornito da FritzBox nella barra degli indirizzi del browser, anche da un telefonino che non è connesso alla rete locale, potrete accedere al Vostro web server.
<br />
<br />
BENE questo è tutto, spero che la procedura sia stata utile e se avete un Modem di un'altra marca, potete verificare su Internet se è predisposto a questo tipo di servizio.
</p>
</div>


<div className="mt-[800px] :w-[375px] h-[80px] bg-transparent]"></div>


<footer className=" w-[100%] h-24  left-0 mt-[30px] absolute bg-[#1b4455] z-40">
<h6 className="text-[white] min-[1400px]:ml-[-1410px] scale-90 mt-[36px] ml-[-110px] xl:ml-[-900px] xl:text-lg md:ml-[-400px] md:text-[19px]">Copyright © 2023 MimmoSoftweb</h6>
<a className=" text-white hover:text-[#f9b65d] text-[14px] ml-[-174px] md:ml-[-510px] pt-[60px] xl:ml-[-996px] min-[1400px]:ml-[-1506px]" href="https://www.iubenda.com/privacy-policy/13346282">Privacy Policy</a>
<a className=" text-white hover:text-[#f9b65d] text-[14px] ml-[-190px] pt-[60px]" href="https://www.iubenda.com/privacy-policy/13346282/cookie-policy">Cookie Policy</a>
</footer>


        </>

    );

};

export default WebServerconRaspberry;