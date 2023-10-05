class MiniMaple{
    constructor()
    {
        this.components = [];
    }

    divide(input)
    {
        let parts = input.split(/[-+,\s]+/).filter((x) => x != '');
        const signs = input.split(/[a-z0-9*^,\s]+/);

        for (let i = 0; i < parts.length - 1; i++)
        {
            if (signs[i] === '-')
                parts[i] = ('-' + parts[i]);
            
            this.components.push(parts[i]);
        }

        this.components.push(parts[parts.length - 1]);
    }

    diffSegment(segment)
    {
        const globalVar = this.components[this.components.length - 1];

        let rx = /[a-z,\s]+/;
        const curVar = rx.exec(segment);
        
        if (!curVar || curVar[0] != globalVar)
            return '';
        else if (segment.includes('^'))
        {
            const vals = segment.split(/[a-z^\s]+/);
            const newPow = +vals[1] - 1;

            let res = "";
            if (newPow === 1)
                res =  vals[0] + vals[1] + '*' + globalVar;
            else 
                res = vals[0] + vals[1] + '*' + globalVar + '^' + newPow.toString();

            const toMult = res.split(globalVar)[0].slice(0, -1);
            const multRes = eval(toMult);

            return multRes.toString() + '*' + globalVar + res.split(globalVar)[1];
        }
        else// if (segment.includes('*'))
        {
            rx = /[0-9-\s]+/;
            return rx.exec(segment)[0];
        }
    }

    diff(input)
    {
        this.divide(input);

        const n = this.components.length;

        let res = '';

        for (let i = 0; i < n - 1; i++)
        {
            const curRes = this.diffSegment(this.components[i]);
            if (curRes.length !== 0 && curRes[0] !== '-' && i !== 0)
                res += ('+' + curRes);
            else res += curRes;
        }
        
        if (res == '')
            res = '0';

        return res;
    }
}

export {MiniMaple}