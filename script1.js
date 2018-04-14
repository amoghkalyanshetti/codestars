var score=0;
function validate()
{
	if(document.myForm.q1.value == "1")
	{
	 score=score+10;
	}
	if(document.myForm.q2.value=="3")
	{
		score=score+10;
	}
	if(document.myForm.q3.value=="4")
	{
		score=score+10;
	}
	if(document.myForm.q4.value=="3")
	{
		score=score+10;
	}
	if(document.myForm.q5.value=="1")
	{
		score=score+10;
	}
	if(document.myForm.q6.value=="2")
	{
		score=score+10;
	}
	if(document.myForm.q7.value=="2")
	{
		score=score+10;
	}
	if(document.myForm.q8.value=="3")
	{
		score=score+10;
	}
	if(document.myForm.q9.value=="1")
	{
		score=score+10;
	}
	if(document.myForm.q10.value=="3")
	{
		score=score+10;
	}

	window.alert("Your score:     "+score);
}