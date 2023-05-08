function generatePieces() {
    const attributes = [
        ['light', 'dark'],
        ['tall', 'short'],
        ['square', 'circular'],
        ['hollow', 'solid']
    ];

    let pieces = [];
    for (const attr1 of attributes[0]) {
        for (const attr2 of attributes[1]) {
            for (const attr3 of attributes[2]) {
                for (const attr4 of attributes[3]) {
                    pieces.push({
                        color: attr1,
                        height: attr2,
                        shape: attr3,
                        fill: attr4
                    });
                }
            }
        }
    }
    return pieces;
}

const pieces = generatePieces();
console.log(pieces);
