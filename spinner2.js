arr= ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|   ', '\r/   ','\r-   ','\r\\   ']
delay = 100;
increment = 200;
for (let i = 0; i < arr.length * 2; i++) {
  setTimeout(function() {
    process.stdout.write(arr[i])
  },delay)
  delay+=increment 
}