import librosa, os, shutil, datetime
import librosa.display
import matplotlib.pyplot as plt

filename = os.getcwd() + "/sound.wav"
y, sr = librosa.load(filename)

plt.figure()
plt.subplot(3, 1, 1)
librosa.display.waveplot(y, sr=sr)
plt.title("Sound Plot")

plt.savefig("image", orientation='landscape')

#Copy File to Uploads Folder with Date/Time
now = str(datetime.datetime.now())[:19]
now = now.replace(":","_")

dest = os.getcwd() + "/uploads/" + now + ".wav"
shutil.copy(filename, dest)
