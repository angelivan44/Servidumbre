import pandas as pd
import openpyxl
import ezdxf
import numpy as np
from shapely.geometry import *
import os

def mainFuntion(data_url,dxf_url,directory,exportacion):

    excelPath = data_url.replace("\\","\\\\")
    
    dxfPath = dxf_url.replace("\\","\\\\")
    directoryPath = directory.replace("\\","\\\\")
    exportacionPath = exportacion.replace("\\","\\\\")

    print(excelPath)
    print(dxfPath)

    data = pd.read_excel(excelPath, sheet_name="DATABASE").to_dict("record")

    general_data = pd.read_excel(excelPath,sheet_name="GENERAL").to_dict("record")

    areas_list = os.listdir(directoryPath)

    main_line = pd.read_excel(excelPath, sheet_name="LINEA")


    def conver_coord (x):
        try:
            return (x["X"],x["Y"])
        except KeyError:
            return (x["ESTE"],x["NORTE"])

    def dataFrame_to_list(x):
        y = x.to_dict('records')
        z = list(map(conver_coord,y))
        return z

    line_coords = dataFrame_to_list(main_line)

    data_cajetin = ["EST","TIP","EXP","PRO","NOMBRE","CULTIVO","LONG","ANCHO","AREA","AREAE","AREAA"]

    dic_attributes = {"EST":"NUMEROESTRUCTURA",
                            "TIP":"TIPO",
                            "EXP":"EXPEDIENTE",
                            "PRO":"PROGRESIVA",
                            "NOMBRE":"NOMBRE",
                            "CULTIVO":"CULTIVO",
                            "LONG":"LONGITUD",
                            "ANCHO":"data",
                            "AREA":"AREAREAL",
                            "AREAE":"AREAESTRUCTURA",
                            "AREAA":"AREAAIRES",
                    }

    def returnData(data,index,add,field):
        if index == 0 and add == -1:
            gotdata = '-'
        else :
            try:
                gotdata = data[index+add][field]
            except IndexError:
                gotdata = '-'
        return gotdata




    data_servidumbre = []
    for index, x in enumerate(data):
        dic = {}
        for y,z in dic_attributes.items():
            if y =="ANCHO":
                dic[y]=12
                dic[y+"-A"]=12
                dic[y+"-D"]=12
            else:
                dic[y]=x[z]
                dic[y+"-A"]=returnData(data,index,-1,z)
                dic[y+"-D"]=returnData(data,index,1,z)
        data_servidumbre.append(dic)
    data_servidumbre

    areas_owners = []
    for x in areas_list:
        area = pd.read_csv(directory+"\\"+x)
        list_coord = dataFrame_to_list(area)
        areas_owners.append(list_coord)
        
    areas_owners

    line = LineString(line_coords)
    faja = line.buffer(12, cap_style=2, join_style=2)




    def areas_intersections(data):
        inter = faja.intersection(data)
        return list(inter.exterior.coords)




    poligons = list(map(Polygon, areas_owners))
    intersections = list(map(areas_intersections, poligons))

    def numeracion_coords(data):
        dic = {}
        for index, x in enumerate(data):
            numeracion = str(index+1)
            dic["P-"+numeracion] = numeracion
            dic["N-"+numeracion] = round(x[1],2)
            dic["E-"+numeracion] = round(x[0],0)
        return dic




    numeracion_data = list(map(numeracion_coords,intersections ))
    numeracion_data




    dic_cajetin = {"EXPEDIENTE":"EXPEDIENTE",
                            "PROPIETARIO":"NOMBRE",
                            "LOCALIDAD-C":"LOCALIDAD",
                            "DISTRITO-C":"DISTRITO",
                            "PROVINCIA-C":"PROVINCIA",
                            "DEPARTAMENTO-C":"DEPARTAMENTO",
                            "LONG-C":"LONGITUD",
                            "AREA-C":"AREAREAL",
                    }




    list_cajetin = []
    for x in data:
        dic = {"ANCHO-C":12,"PREDIO-C":0}
        for y in dic_cajetin:
            dic[y]=x[dic_cajetin[y]]
        list_cajetin.append(dic)
    list_cajetin




    doc = ezdxf.readfile(dxfPath)




    for index,_data in enumerate(list_cajetin):
        actual_doc = ezdxf.readfile(dxfPath)
        psp = actual_doc.layout(name=None)
        msp = actual_doc.modelspace()
        values = {}
        point =[0,0]
        values.update(numeracion_data[index])
        values.update(data_servidumbre[index])
        values.update(list_cajetin[index])
        hatch= msp.add_hatch(color=2)
        hatch.paths.add_polyline_path(intersections[index])
        hatch.set_pattern_fill('ANSI31', scale=0.5)
        poligon = msp.add_lwpolyline(intersections[index])
        for i,data in enumerate(intersections[index][:-1]):
            newDate = {"PUNTO":"P"+str(i+1)}
            punto = msp.add_blockref(name="punto",insert=[data[0],data[1]])
            punto.add_auto_attribs(newDate)
        bloque =  psp.add_blockref(name="CAJETIN",insert=point)
        bloque.add_auto_attribs(values)
        actual_doc.saveas(exportacionPath+"\\"+str(index+1)+".dxf")
        psp = None
        mps = None
        actual_doc = None

    doc=None

    return "ok"
