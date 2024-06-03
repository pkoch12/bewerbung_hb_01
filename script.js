document.addEventListener("DOMContentLoaded", function() {
    // Kategorien und ihre jeweiligen Prozentwerte
    const categories = [
        { label: 'Kategorie 1', percentage: 70 },
        { label: 'Kategorie 2', percentage: 50 },
        { label: 'Kategorie 3', percentage: 30 },
        { label: 'Kategorie 4', percentage: 85 },
        { label: 'Kategorie 5', percentage: 45 },
        { label: 'Kategorie 6', percentage: 60 },
        { label: 'Kategorie 7', percentage: 40 },
        { label: 'Kategorie 8', percentage: 75 },
        { label: 'Kategorie 9', percentage: 55 },
        { label: 'Kategorie 10', percentage: 65 },
        { label: 'Kategorie 11', percentage: 90 },
        { label: 'Kategorie 12', percentage: 35 },
        { label: 'Kategorie 13', percentage: 80 },
        { label: 'Kategorie 14', percentage: 25 },
        { label: 'Kategorie 15', percentage: 95 }
    ];

    // Balkendiagramm erstellen
    const barChart = document.getElementById('barchart');
    categories.forEach(category => {
        addBar(category.label, category.percentage);
    });
});

function addBar(label, percentage) {
    const barChart = document.getElementById('barchart');
    
    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';
    
    const barLabel = document.createElement('span');
    barLabel.className = 'label';
    barLabel.textContent = label;
    barContainer.appendChild(barLabel);
    
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = '10%';
    barContainer.appendChild(bar);
    
    bar.addEventListener('mouseenter', function() {
        bar.style.width = `${percentage}%`;
        barLabel.textContent = getProgressStatement(percentage); // Anzeige der Fortschrittsaussage
    });
    
    bar.addEventListener('mouseleave', function() {
        bar.style.width = '10%';
        barLabel.textContent = label; // Zurücksetzen des Kategorienamens
    });
    
    barChart.appendChild(barContainer);
}

// Funktion zur Bestimmung der Fortschrittsaussage basierend auf dem Prozentwert
function getProgressStatement(percentage) {
    if (percentage <= 25) {
        return 'Die Basics sitzen';
    } else if (percentage <= 50) {
        return 'Ich weiß, was zu tun ist';
    } else if (percentage <= 75) {
        return 'Absolutes Heimspiel!';
    } else {
        return 'Bediene ich blind - auch um 3 Uhr nachts!';
    }
}
