for(i=1; i<=9; i++){
  line='';
  for(j=1; j<=i; j++){
    line += [i] + '*' + [j] + '=' + (i*j) + '  '
  }
  console.log(line)
}

