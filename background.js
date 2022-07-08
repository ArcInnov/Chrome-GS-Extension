let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => { // this line is instructing program to run as soon as extension starts(clicked)
  chrome.storage.sync.set({ color }); // this line is getting color value sotred in storage
  console.log('Default background color set to %cgreen', `color: ${color}`); // this line is printing a string  on console
});