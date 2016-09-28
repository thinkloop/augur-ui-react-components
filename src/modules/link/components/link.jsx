import React, { Component, PropTypes } from 'react';

export default class Link extends Component {
	static propTypes = {
		className: PropTypes.string,
		href: PropTypes.string.isRequired,
		target: PropTypes.string,
		onClick: PropTypes.func,
		disabled: PropTypes.bool
	};

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		// if target is set (e.g. to "_blank"), let the browser handle it
		if (this.props.target || (this.props.href && this.props.href.indexOf('mailto:') === 0)) {
			return;
		}
		// if not a left click or is a special click, let the browser handle it
		if (e.button !== 0 || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
			return;
		}
		e.preventDefault();
		if (this.props.onClick && !this.props.disabled) {
			this.props.onClick(this.props.href);
		}
	}

	render() {
		return <a {...this.props} href={this.props.href} className={`link ${this.props.className}`} onClick={this.handleClick} />;
	}
}
