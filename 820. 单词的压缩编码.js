/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let set=new Set(words)
    for(let i=0;i<words.length;i++){
        for(let j=1;j<words[i].length;j++){
            let sub=words[i].substring(j)
            set.delete(sub)
        }
    }
    let sum=0;
    set.forEach(s=>{
        sum+=s.length+1
    })
    return sum
};

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    function Trie(){
        this._children={}
        this._count=0;
        this._sum=0;
    }
    Trie.prototype.add=function(word){
        let parent=this;
        let root=this;
        for(let i=0;i<word.length;i++){
            let ch=word[i]
            if(parent._children[ch]){
                parent=parent._children[ch]
            }else{
                parent._children[ch]=new Trie()
                parent._children[ch]._count=parent._count+1;
                parent=parent._children[ch]   
            }
        }
    }
    Trie.prototype.getLength=function(){
        let sum=0;
        function dfs(tree){
            if(Object.keys(tree._children).length===0){
                sum+=tree._count+1;
                return;
            }
            for(let k in tree._children){
                dfs(tree._children[k])
            }
        }
        for(let k in this._children){
            dfs(this._children[k])
        }
        return sum
    }
    let trie=new Trie()
    words.forEach(word=>{
        let w=word.split('').reverse().join('')
        trie.add(w)
    })
    return trie.getLength()
};