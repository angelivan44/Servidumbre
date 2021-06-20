from flask import Flask
from flask import request
import json
from Servidumbre_app import mainFuntion

app = Flask(__name__)

@app.route("/<input>",methods=['GET', 'POST'])
def calc(input):
    data = json.loads(request.data)
    excelPath = data['excelPath']
    dxfPath = data['dxfPath']
    csvPath = data['csvPath']
    dirPath = data['dirPath']
    mainFuntion(excelPath,dxfPath,csvPath,dirPath)
    return "ok"

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5001)