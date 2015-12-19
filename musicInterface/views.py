import sys
sys.path.append("/Users/raffy4284/Desktop/M158Project/musicInterface/thirst/code/libo")
from django.shortcuts import render
from django.http import HttpResponse
from socket import socket, AF_INET, SOCK_DGRAM
import odot as o

sock = socket(AF_INET, SOCK_DGRAM)

def send(message, port = 54345):
    sock.sendto(message.getBytes(), ('127.0.0.1', port))

def index(request):
    return render(request, 'musicInterface/index.html',{})

def process(request): 
    if request.method == "POST":
        return HttpResponse("ERROR 405");
    else: 
        numNotes = int(request.GET["score[0][NumNotes]"])
        tempo = int(request.GET["score[tempo]"])
        milliseconds = int(((60./tempo * 1000.*100000)/100000)*4)
        instrument=str(request.GET["score[instrument]"])
        noteList = list()
        for note in range(0,numNotes):
            noteVals = int(request.GET["score[0][max]["+str(note)+"][notes]"])
            noteVel = int(request.GET["score[0][max]["+str(note)+"][vel]"])
            noteDur = float(request.GET["score[0][max]["+str(note)+"][dur]"])
            oNote = o.message("/"+instrument+"/note",noteVals)
            oVel = o.message("/"+instrument+"/vel", noteVel)
            oDur = o.message("/"+instrument+"/dur", noteDur)
            oTempo = o.message("/"+instrument+"/tempo",milliseconds)
            noteList.append([oNote,oVel,oDur, oTempo])
        Score = o.bundle(messages = [o.message("/notes", [o.bundle(messages = odotMessage) for odotMessage in noteList])])
        send(Score)

        return HttpResponse("SUCCESS");




