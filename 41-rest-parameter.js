/*

Rest parametar adalah fitur dimana kita bisa mengirim data sebanyak banyaknya pada satu parameter dan secara otomatis
akan di konversi menjadi array
Rest Parameter hanya boleh ada satu di function dan tidak boleh lebih dari satu
Rest Parameter hanya boleh berada di posisi paling akhir tidak boleh didepan atau di tengah kecuali memang cuma ada 1 parameter


*/


function sum (name, ...data){
    let total = 0;
    for (const item of data) {

        total += item
        
    }

    console.log(`Total ${name}, is ${total}`);
    
}

sum("Orange",10,100,20,20,50);
sum("Apple",10,15,15);
