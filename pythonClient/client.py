from socketIO_client import SocketIO, LoggingNamespace

socketIO = SocketIO('localhost', 8000, LoggingNamespace)

def on_connect():
    print('connect')

def on_disconnect():
    print('disconnect')

def reciever(*args):
    print('reciever', args)

socketIO.emit('message', "this is the Python Client")

socketIO.on('message', reciever)
socketIO.on('disconnect', on_disconnect)

socketIO.on('connect', on_connect)



socketIO.wait()