function main(){
    const name="Rishika";
    function print(){
        console.log(name);
    }
    return print;
}

let fn=main();
fn();