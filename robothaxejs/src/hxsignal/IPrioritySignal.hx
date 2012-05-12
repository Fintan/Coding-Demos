package hxsignal;

interface IPrioritySignal<T> implements ISignal<T>
{
	function addWithPriority(listener:T, ?priority:Int=0):T;
	function addOnceWithPriority(listener:T, ?priority:Int=0):T;
}