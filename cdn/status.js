var timeout = 2000;
var value_of_upCount = 0;
Object.defineProperty(window, "upCount", { 
    get: function(v) {
        return value_of_upCount;
    },
    set: function(v) { 
        switch(v) {
            case 0:
                document.getElementById('global').textContent = "All Down"
                break;
            case 4: 
                document.getElementById('global').textContent = "All Up"
                break;
            default: 
                document.getElementById('global').textContent = "Degraded"
                break;
        }
        value_of_upCount = v;
    }
});
upCount = 0;

var westus2StartTime = new Date();
var westus2 = new XMLHttpRequest();
westus2.timeout = timeout;
westus2.onload = function () {
	if (westus2.status >= 200 && westus2.status < 300) {
		console.log('Cluster-WestUs2: Up');
        document.getElementById("cluster-westus2").classList.add('up');
        document.getElementById('cluster-westus2-status').textContent = "Up! (" + (new Date().getTime() - westus2StartTime.getTime()) + "ms)"
        upCount++;
	} else {
		console.log('Cluster-WestUs2: Down');
        document.getElementById("cluster-westus2").classList.add('down');
        document.getElementById('cluster-westus2-status').textContent = "Down"
	}
};
westus2.ontimeout = function () {
    console.log('Cluster-WestUs2: Down');
    document.getElementById("cluster-westus2").classList.add('down');
    document.getElementById('cluster-westus2-status').textContent = "Down"
    
}
westus2.open('HEAD', 'https://mastrchef.westus2.cloudapp.azure.com/azuretest');
westus2.send();

var eastus2StartTime = new Date();
var eastus2 = new XMLHttpRequest();
eastus2.timeout = timeout;
eastus2.onload = function () {
	if (eastus2.status >= 200 && eastus2.status < 300) {
		console.log('Cluster-EastUs2: Up');
        document.getElementById("cluster-eastus2").classList.add('up');
        document.getElementById('cluster-eastus2-status').textContent = "Up! (" + (new Date().getTime() - eastus2StartTime.getTime()) + "ms)"
        upCount++;
	} else {
		console.log('Cluster-EastUs2: Down');
        document.getElementById("cluster-eastus2").classList.add('down');
        document.getElementById('cluster-eastus2-status').textContent = "Down"
	}
};
eastus2.ontimeout = function () {
    console.log('Cluster-EastUs2: Down');
    document.getElementById("cluster-eastus2").classList.add('down');
    document.getElementById('cluster-eastus2-status').textContent = "Down"
}
eastus2.open('HEAD', 'https://mastrchef.eastus2.cloudapp.azure.com/azuretest');
eastus2.send();

var seasiaStartTime = new Date();
var seasia = new XMLHttpRequest();
seasia.timeout = timeout;
seasia.onload = function () {
	if (seasia.status >= 200 && seasia.status < 300) {
		console.log('Cluster-SEAsia: Up');
        document.getElementById("cluster-seasia").classList.add('up');
        document.getElementById('cluster-seasia-status').textContent = "Up! (" + (new Date().getTime() - seasiaStartTime.getTime()) + "ms)"
        upCount++;
	} else {
		console.log('Cluster-SEAsia: Down');
        document.getElementById("cluster-seasia").classList.add('down');
        document.getElementById('cluster-seasia-status').textContent = "Down"
	}
};
seasia.ontimeout = function () {
    console.log('Cluster-SEAsia: Down');
    document.getElementById("cluster-seasia").classList.add('down');
    document.getElementById('cluster-seasia-status').textContent = "Down"
}
seasia.open('HEAD', 'https://mastrchef.southeastasia.cloudapp.azure.com/azuretest');
seasia.send();

var euwestStartTime = new Date();
var euwest = new XMLHttpRequest();
euwest.timeout = timeout;
euwest.onload = function () {
	if (euwest.status >= 200 && euwest.status < 300) {
		console.log('Cluster-EUWest: Up');
        document.getElementById("cluster-euwest").classList.add('up');
        document.getElementById('cluster-euwest-status').textContent = "Up! (" + (new Date().getTime() - euwestStartTime.getTime()) + "ms)"
        upCount++;
	} else {
		console.log('Cluster-EUWest: Down');
        document.getElementById("cluster-euwest").classList.add('down');
        document.getElementById('cluster-euwest-status').textContent = "Down"
	}
};
euwest.ontimeout = function () {
    console.log('Cluster-EUWest: Down');
    document.getElementById("cluster-euwest").classList.add('down');
    document.getElementById('cluster-euwest-status').textContent = "Down"
}
euwest.open('HEAD', 'https://mastrchef.westeurope.cloudapp.azure.com/azuretest');
euwest.send();