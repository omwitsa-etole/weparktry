fl = open("login.html","r")
lines = fl.readlines()
fl.close()

for line in lines:
    #line.replace("velzon","WeParkAfrica")
    line = str(line).replace("Velzon","WeParkAfrica")
    if "elzon" in str(line):
        print(str(line))
    
fl = open("login.html","w")
for line in lines:  
    fl.write(line)
fl.close()