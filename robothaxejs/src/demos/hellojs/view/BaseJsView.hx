package demos.hellojs.view;
import robothaxe.event.EventDispatcher;
import robothaxe.event.IEventDispatcher;
import js.Dom;
import js.JQuery;
import robothaxe.core.IViewContainer;

/**
 * ...
 * @author Mike Cann
 *https://gist.github.com/1502132
 *https://gist.github.com/1502136
 */

class BaseJsView extends EventDispatcher, implements IViewContainer
{
	public var viewAdded:Dynamic -> Void;
	public var viewRemoved:Dynamic -> Void;
	
	public var element:HtmlDom;
	public var parent:BaseJsView;
	public var children:Array<BaseJsView>;

	public function new(element:HtmlDom=null) 
	{
		super();
		this.element = element;
		this.children = [];
	}	
	
	public function add(child:BaseJsView):Void
	{
		children.push(child);
		child.parent = this;
		child.viewAdded = viewAdded;
		child.viewRemoved = viewRemoved;		
		if(viewAdded!=null) child.addChildren();
		element.appendChild(child.element);
		if(viewAdded!=null) viewAdded(child);
	}
	
	public function remove(child:BaseJsView):Void
	{
		if (viewRemoved != null) child.removeChildren();
		children.remove(child);
		child.parent = null;
		child.viewAdded = null;
		child.viewRemoved = null;
		element.removeChild(child.element);
		if (viewRemoved != null) viewRemoved(child);
	}
	
	public function addChildren():Void
	{
		for (c in children)
		{
			c.viewAdded = viewAdded;
			c.viewRemoved = viewRemoved;
			c.addChildren();
			viewAdded(c);
		}	
	}
	
	public function removeChildren():Void
	{
		for (c in children)
		{
			c.removeChildren();
			element.removeChild(c.element);
			c.parent = null;
			c.viewAdded = null;
			c.viewRemoved = null;
			if (viewRemoved != null) viewRemoved(c);
		}
	}
	
	public function isAdded(view:Dynamic):Bool 
	{
		//return Lambda.has(children,view);
		return true;
	}

}