from django.shortcuts import render
from django.http import HttpResponse
from .OSC import OSCClient, OSCBundle



def index(request):
    return render(request, 'musicInterface/index.html',{})

def process(request): 
    if request.method == "POST":
        return HttpResponse("ERROR 405");
    else: 
        client = OSCClient()
        client.connect(("localhost", 54345))

        ### Create a bundle:
        bundle = OSCBundle()
        bundle.append({'addr': "/frequency", 'args':[440.]})
        bundle.append({'addr': "/envelope/line", 'args': [1., 20, 0., 1000]})
        client.send(bundle)
        numNotes = int(request.GET["score[0][NumNotes]"])
        score = OSCBundle()
        noteList = list()
        for note in range(0,numNotes):
            notes = OSCBundle()
            noteVals = int(request.GET["score[0][max]["+str(note)+"][notes]"])
            noteVel = int(request.GET["score[0][max]["+str(note)+"][vel]"])
            noteDur = float(request.GET["score[0][max]["+str(note)+"][dur]"])
            notes.append({'addr': "/note", 'args':["FL"]})
            notes.append({'addr': "/vel", 'args': [noteVel]})
            notes.append({'addr': "/dur", 'args': [noteDur]})
            noteList.append(notes)
            client.send(notes)
        return HttpResponse("FLAG");
