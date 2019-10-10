import json
import os

def openJsonFile():
    with open('groupSig.json') as json_file:  
        data = json.load(json_file)
        return data['TC277']

def createDictionaryStructJson(oldMicrocontrollerDict: dict):
    newMicrocontrollerDict = {}
    # print(oldMicrocontrollerDict.keys())
    for group in oldMicrocontrollerDict.keys():
        keyWords = group.split(' ')[0]
        if keyWords not in newMicrocontrollerDict.keys():
            newMicrocontrollerDict[keyWords] = {group: []}
        else:
            newMicrocontrollerDict[keyWords][group] = []
        for signalData in oldMicrocontrollerDict[group]:

            newMicrocontrollerDict[keyWords][group].append({
                'primarySignalName': signalData[0],
                'port': signalData[1],
                'alternativeSignalName': signalData[2],
                'isSignalChosen': 'False',
                'usage': 'tbd',
                'majorGroup': keyWords,
                'minorGroup': group
            })
    # print(json.dumps(newMicrocontrollerDict, indent=4, sort_keys=True))
    return newMicrocontrollerDict

def writeNewDictToAFile(fileWhereToSave: str, dataToSave: dict):
    with open(fileWhereToSave, 'w') as file:
        file.write(json.dumps(dataToSave, indent=4))
        

if __name__ == "__main__":
    inputData = openJsonFile()
    newDict = createDictionaryStructJson(oldMicrocontrollerDict=inputData)
    currentDirectory = os.path.dirname(os.path.realpath(__file__))
    print(currentDirectory)
    writeNewDictToAFile(fileWhereToSave=currentDirectory + '/TC277.json', dataToSave=newDict)
    
    