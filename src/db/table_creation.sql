--CREATE  transaction  table
CREATE  TABLE IF NOT EXISTS transactions (
reference  character varying(62) not null,
from_account  int,
to_account  int,
amount  decimal varying(128)
tran_time timestamp
);


--CREATE  balances  table
CREATE  TABLE IF NOT EXISTS balances (
account  int not null,
balance  decimal varying(128)
);
