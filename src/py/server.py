from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS, cross_origin
import json
from Servidumbre_app import mainFuntion

app = Flask(__name__)
CORS(app, support_credentials=True)
@app.route("/planos",methods=['GET', 'POST'])
def genPlanos():
    data = json.loads(request.data)
    excelPath = data['excelPath']
    dxfPath = data['dxfPath']
    csvPath = data['csvPath']
    dirPath = data['dirPath']
    # mainFuntion(excelPath, dxfPath, csvPath, dirPath)
    return jsonify(excelPath, dxfPath, csvPath, dirPath)

@app.route("/auto",methods=['GET', 'POST'])
def genAutho():
    data = json.loads(request.data)
    excelPath = data['excelPath']
    autoPath = data['autoPath']
    dirPath = data['dirPath']
    #AutoFunction(excelPath, autoPath, dirPath)
    return jsonify(excelPath, autoPath, dirPath)

@app.route("/contrato",methods=['GET', 'POST'])
def genContrato():
    data = json.loads(request.data)
    excelPath = data['excelPath']
    contratoPath = data['contratoPath']
    dirPath = data['dirPath']
    #AutoFunction(excelPath, contratoPath, dirPath)
    return jsonify(excelPath, contratoPath, dirPath)

@app.route("/valorizacion",methods=['GET', 'POST'])
def genValorizacion():
    data = json.loads(request.data)
    excelPath = data['excelPath']
    valorizacionPath = data['valorizacionPath']
    dirPath = data['dirPath']
    #ContratoFunction(excelPath, valorizacionPath, dirPath)
    return jsonify(excelPath, valorizacionPath, dirPath)

@app.route("/recibo",methods=['GET', 'POST'])
def genRecibo():
    data = json.loads(request.data)
    excelPath = data['excelPath']
    reciboPath = data['reciboPath']
    dirPath = data['dirPath']
    #ContratoFunction(excelPath, reciboPath, dirPath)
    return jsonify(excelPath, reciboPath, dirPath)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5001)