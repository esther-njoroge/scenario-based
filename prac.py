class DisasterRecoverySystem:
    def __init__(self):
        self.situations = {}
    def add_situation(self, location, situation):
        if location not in self.situations:
            self.situations[location] = []
        self.situations[location].append(situation)
    def attend_situation(self, location):
        return self.situations.get(location, [])


drs = DisasterRecoverySystem()
drs.attend_situation("Location A", "Flood")
drs.attend_situation("Location B", "Earthquake")
print(drs.attend_situation("Location A"))  
print(drs.attend_situation("Location B")) 