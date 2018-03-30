# Server

__Index.js__ at root get the core dependencies and launches the server.

__app.js__ At roots build the app instance. When using http endpoints it also loads the routes from a route file.

__io/index.js__ Open sockets and set io events behaviours.

__controllers/messages.js__  Describe all behaviours related to message. Also stores the message because of the lack of DB.

__models__ Contains models (use schema-object library to have a proper constructor)

# Client

The overall structure is a standard structure init w/ ng new.

Angular version is 5.2.0 (latest at this time).

__Components__

3 mains components. The standard app.component. Here it doesn't contains any behaviours except a router-outlet and the app background image.

Home Component : Get the username and store it in the Session Storage. Session storage is use to ease tests. A proper authentification is mandatory for production.

Chat component : Contains the core behaviour. Send messages to the server via and observable that emit an event in a socket.
On init, also get all messages from the server and displays it.