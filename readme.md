1. Install Visual Studio Code from https://code.visualstudio.com/<br>
    1.1 Install the Live Server extension from the extensions tab in Visual Studio Code<br>
    1.2 Install the Python extension from the extensions tab in Visual Studio Code
3. Install Python from https://www.python.org/
4. Install MySQL from https://dev.mysql.com/downloads/mysql/<br>
    3.1 When installing MySQL set the root password to "Pa$$w0rd"
5. Install MySQL Workbench from https://dev.mysql.com/downloads/workbench/<br>
    4.1 Add a new connection by clicking the + button in the MySQL Connections section<br>
    4.2 Set up the connection with Connection Name: portfolio, Hostname: Enter 127.0.0.1, Port: 3306, Username: root, and Password: Pa$$w0rd
6. Open the setup.sql in the sql folder using MySQL Workbench and excute it by pressing Controlle + Shift + Enter
7. Install Flask by opening a terminal in Visual Studio Code and type
```shell
pip3 install flask flask-sqlalchemy pymysql cryptography
pip install -U flask-cors
```
7. Start the database api by inputting
```shell
cd api
flask --app db run
```
8. Start the web server by clicking the Go Live button at the bottom right corner in Visual Studio Code
9. Go to http://127.0.0.1:5500/html/

P.S. All the shell command are for Windows
