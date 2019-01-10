const buf = Buffer.allocUnsafe(6);

buf.writeUIntLE(0x1234567890ab, 0, 6);

// 输出: <Buffer ab 90 78 56 34 12>
console.log(buf);
console.log(buf.toString('hex'));