# Juego de tres en línea

Mini proyecto de ejemplo para empezar a trabajar con React.
Está realizado siguiendo los pasos del tutorial oficial de la documentación [React](https://reactjs.org/tutorial/tutorial.html).

## Funcionamiento
El juego consiste en un tablero de 9 casillas en las que en cada casilla se puede indicar una 'X' o una 'O'. Cada una de estas letras se asocia a un jugador que tiene el objetivo de colocar en el tablero 3 en línea. Más información: [Tres en línea](https://es.wikipedia.org/wiki/Tres_en_l%C3%ADnea).

## Desarrollo
###Módulos
Por la simplicidad del proyectoSe implementa en un único módulo.

###Componentes
* Square: pinta cada una de las casillas del tablero. Es un componente funcional, no tiene estado. Está controlador por el componente Board.
* Board: gestiona el tablero. Se encarga de invocar a Square para cada una de las casillas. Es un componente controlador por Game, no tiene estado propio.
* Game: gestiona el funcionamiento del juego.
