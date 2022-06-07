## 对表的操作
创建table（create）
```
create tbl if not exists (id varchar(50),name varchar(50),age int);
```
♦️ 删除表格：
```
drop table tbl;
```
♦️ 清空表格数据：
```
delete from tbl;
```
查看所有表格
```
show tables;
```

## 对表字段的操作
♦️ 增加表字段
```
alter table tbl 
add school varchar(20);
```
♦️ 删除表字段
```
alter table tbl 
drop name;
```
> 如果只有剩一条数据，则不能用drop

♦️ 查看表字段
```
desc tbl;
或者
show create table tbl;
```
## 对数据增删改查
♦️ 插入数据
```
insert into tbl values (3,'kangkang',18);
insert into tbl (name) values ('lili');
```
删除某条数据
```
delete from tbl where id=1;
```
♦️ 修改某条数据
```
update tbl set name='xiaoming' where id=1;
```
查看某条数据
```
select * from tbl where id=1;
```
## 操作符
- like: 在 WHERE 子句中搜索列中的指定模式
  - x% 以x开头
  - %x 以x结尾
  - %x% 包含x
- in: 在WHERE 子句中规定多个值
```
SELECT * FROM Websites
WHERE name IN ('Google','菜鸟教程');
```
- between: 选取介于两个值之间的数据范围内的值
## 连表操作
- inner join
- left inner
- right join
- full outer join

## 做题实践
https://leetcode.cn/study-plan/sql/
