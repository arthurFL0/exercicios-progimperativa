module.exports = {

    pipoca: function (tempo)
{
    switch (tempo)
    {
        case tempo=10: console.log('Prato pronto, bom apetite!');
        break
        case tempo<10: console.log('Tempo insuficiente');
        break
        case tempo>3*10: console.log('Kabumm!');
        break
        case tempo>2*10: console.log('A comida queimou!');
        break
    }
},

    macarrao: function (tempo)
    {
        switch (tempo)
        {
            case tempo>=8 && tempo<=20: console.log('Prato pronto, bom apetite!');
            break;
            case tempo<8: console.log('Tempo insuficiente');
            break;
            case tempo>3*8: console.log('Kabumm!');
            break;
            case tempo>2*8: console.log('A comida queimou!');
            break;
        }
    },

    carne: function (tempo)
    {
        switch (tempo)
        {
            case tempo=15: console.log('Prato pronto, bom apetite!');
            break;
            case tempo<15: console.log('Tempo insuficiente');
            break;
            case tempo>3*15: console.log('Kabumm!');
            break;
            case tempo>2*15: console.log('A comida queimou!');
            break;
        }
    },

    feijao: function (tempo)
    {
        switch (tempo)
        {
            case tempo=12: console.log('Prato pronto, bom apetite!');
            break;
            case tempo<12: console.log('Tempo insuficiente');
            break;
            case tempo>3*12: console.log('Kabumm!');
            break;
            case tempo>2*12: console.log('A comida queimou!');
            break;
        }
    },

    brigadeiro: function (tempo)
    {
        switch (tempo)
        {
            case tempo=8: console.log('Prato pronto, bom apetite!');
            break;
            case tempo<8: console.log('Tempo insuficiente');
            break;
            case tempo>3*8: console.log('Kabumm!');
            break;
            case tempo>2*8: console.log('A comida queimou!');
            break;
        }
    }

}
