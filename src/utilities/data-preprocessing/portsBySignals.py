import json
import os, sys

def openJsonFile():
    with open('TC277.json') as json_file:
        data = json.load(json_file)
        return data

def writeNewDictToAFile(fileWhereToSave: str, dataToSave: dict):
    with open(fileWhereToSave, 'w') as file:
        file.write(json.dumps(dataToSave, indent=4))


def createRestructuredDictionary(oldDictionary: dict):
    signals = {}
    for majorGroup in oldDictionary.keys():
        for minorGroup in oldDictionary[majorGroup]:
            for signal in oldDictionary[majorGroup][minorGroup]:
                if (signal['primarySignalName'] not in signals.keys()):
                    signals[signal['primarySignalName']] = [signal['port']]
                else:
                    signals[signal['primarySignalName']].append(signal['port'])
    return signals

if __name__ == "__main__":
    inputData = openJsonFile()
    resDict = createRestructuredDictionary(inputData)
    currentDirectory = os.path.dirname(os.path.realpath(__file__))
    print(resDict)
    writeNewDictToAFile(fileWhereToSave=currentDirectory + '/portsBySigTC277.json', dataToSave=resDict)