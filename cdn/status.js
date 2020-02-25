var timeout = 3000;
var value_of_upCount = 0;
var finishedRequests = 0;
Object.defineProperty(window, "upCount", { 
    get: function(v) {
        return value_of_upCount;
    },
    set: function(v) { 
        if(finishedRequests == 4){
            if (v == finishedRequests) {
                document.getElementById('global').textContent = "All Up"            
            }
            else {
                document.getElementById('global').textContent = "Degraded"   
            }
        }
        value_of_upCount = v;
    }
});
upCount = 0;

var westus2StartTime = new Date();
var westus2 = new XMLHttpRequest();
westus2.timeout = timeout;
westus2.onload = function () {
    finishedRequests++;
	if (westus2.status >= 200 && westus2.status < 300) {
        document.getElementById("cluster-westus2").className = 'status up';
        document.getElementById('cluster-westus2-status').textContent = "Up! (" + (new Date().getTime() - westus2StartTime.getTime()) + "ms)"
        upCount++;
	} else {
        document.getElementById("cluster-westus2").className = 'status down';
        document.getElementById('cluster-westus2-status').textContent = "Down"
        upCount = upCount;
	}
};
westus2.ontimeout = function () {
    finishedRequests++;
    document.getElementById("cluster-westus2").className = 'status down';
    document.getElementById('cluster-westus2-status').textContent = "Down"
    upCount = upCount;    
}
westus2.onerror = westus2.ontimeout
westus2.open('HEAD', 'https://mastrchef.westus2.cloudapp.azure.com/azuretest');
westus2.send();

var eastus2StartTime = new Date();
var eastus2 = new XMLHttpRequest();
eastus2.timeout = timeout;
eastus2.onload = function () {
    finishedRequests++;
	if (eastus2.status >= 200 && eastus2.status < 300) {
        document.getElementById("cluster-eastus2").className = 'status up';
        document.getElementById('cluster-eastus2-status').textContent = "Up! (" + (new Date().getTime() - eastus2StartTime.getTime()) + "ms)"
        upCount++;
	} else {
        document.getElementById("cluster-eastus2").className = 'status down';
        document.getElementById('cluster-eastus2-status').textContent = "Down"
        upCount = upCount;
	}
};
eastus2.ontimeout = function () {
    finishedRequests++;
    document.getElementById("cluster-eastus2").className = 'status down';
    document.getElementById('cluster-eastus2-status').textContent = "Down"
    upCount = upCount;
}
eastus2.onerror = eastus2.ontimeout
eastus2.open('HEAD', 'https://mastrchef.eastus2.cloudapp.azure.com/azuretest');
eastus2.send();

var seasiaStartTime = new Date();
var seasia = new XMLHttpRequest();
seasia.timeout = timeout;
seasia.onload = function () {
    finishedRequests++;
	if (seasia.status >= 200 && seasia.status < 300) {
        document.getElementById("cluster-seasia").className = 'status up';
        document.getElementById('cluster-seasia-status').textContent = "Up! (" + (new Date().getTime() - seasiaStartTime.getTime()) + "ms)"
        upCount++;
	} else {
        document.getElementById("cluster-seasia").className = 'status down';
        document.getElementById('cluster-seasia-status').textContent = "Down"
        upCount = upCount;
	}
};
seasia.ontimeout = function () {
    finishedRequests++;
    document.getElementById("cluster-seasia").className = 'status down';
    document.getElementById('cluster-seasia-status').textContent = "Down"
    upCount = upCount;
}
seasia.onerror = seasia.ontimeout
seasia.open('HEAD', 'https://mastrchef.southeastasia.cloudapp.azure.com/azuretest');
seasia.send();

var uksouthStartTime = new Date();
var uksouth = new XMLHttpRequest();
uksouth.timeout = timeout;
uksouth.onload = function () {
    finishedRequests++;
	if (uksouth.status >= 200 && uksouth.status < 300) {
        document.getElementById("cluster-uksouth").className = 'status up';
        document.getElementById('cluster-uksouth-status').textContent = "Up! (" + (new Date().getTime() - uksouthStartTime.getTime()) + "ms)"
        upCount++;
	} else {
        document.getElementById("cluster-uksouth").className = 'status down';
        document.getElementById('cluster-uksouth-status').textContent = "Down"
        upCount = upCount;
	}
};
uksouth.ontimeout = function () {
    finishedRequests++;
    document.getElementById("cluster-uksouth").className = 'status down';
    document.getElementById('cluster-uksouth-status').textContent = "Down"
    upCount = upCount;
}
uksouth.onerror = uksouth.ontimeout;
uksouth.open('HEAD', 'https://mastrchef.uksouth.cloudapp.azure.com/azuretest');
uksouth.send();

setInterval(function() {
    finishedRequests = 0;
    upCount = 0;
    westus2.open('HEAD', 'https://mastrchef.westus2.cloudapp.azure.com/azuretest');
    westus2StartTime = new Date();
    westus2.send();
    eastus2.open('HEAD', 'https://mastrchef.eastus2.cloudapp.azure.com/azuretest');
    eastus2StartTime = new Date();
    eastus2.send();
    seasia.open('HEAD', 'https://mastrchef.southeastasia.cloudapp.azure.com/azuretest');
    seasiaStartTime = new Date();
    seasia.send();
    uksouth.open('HEAD', 'https://mastrchef.uksouth.cloudapp.azure.com/azuretest');
    uksouthStartTime = new Date();
    uksouth.send();

}, 5000)